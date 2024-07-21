const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactdb'
});

// Insert into pending_reservations instead of reservations
app.post('/react', (req, res) => {
    const sql = "INSERT INTO pending_reservations (num, date, time, name, phone, request) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.people,
        req.body.formattedDate,
        req.body.selectedTime,
        req.body.name,
        req.body.phone,
        req.body.req
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                console.log("Duplicate entry error:", err);
                res.status(400).json({ error: 'Duplicate entry' });
            } else {
                console.error("Error occurred:", err);
                res.status(500).json({ error: 'Internal server error' });
            }
        } else {
            console.log("Insertion into pending_reservations successful!");
            res.status(200).json(data);
        }
    });
});
// Fetch both pending and accepted reservations for a specific user
app.get('/data/:username', (req, res) => {
    const username = req.params.username;
    const query = `
        SELECT id, num, date, time, name, phone, request, status 
        FROM pending_reservations
        WHERE name = ?
        UNION
        SELECT id, num, date, time, name, phone, request, 'accepted' as status 
        FROM reservations
        WHERE name = ?
    `;
    db.query(query, [username, username], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});



app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE username= ? AND password= ?';
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json('Error');
        }
        if (data.length > 0) {
            return res.json('Success');
        } else {
            return res.json('No record');
        }
    });
});
app.post('/user/register', (req, res) => {
    const { username, password } = req.body;
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    const values = [username, password];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error occurred:", err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log("User registration successful!");
            res.status(200).json('Success');
        }
    });
});
// Fetch both pending and accepted reservations
app.get('/data', (req, res) => {
    const query = `
        SELECT id, num, date, time, name, phone, request, status FROM pending_reservations
        UNION
        SELECT id, num, date, time, name, phone, request, 'accepted' as status FROM reservations
    `;
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});


app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const { status } = req.body;

    if (!id || !status) {
        return res.status(400).json({ error: 'ID and status are required' });
    }

    if (status === 'accepted') {
        const insertQuery = `
            INSERT INTO reservations (id, num, date, time, name, phone, request)
            SELECT id, num, date, time, name, phone, request
            FROM pending_reservations
            WHERE id = ?
        `;
        const deleteQuery = 'DELETE FROM pending_reservations WHERE id = ?';

        db.beginTransaction(err => {
            if (err) {
                return res.status(500).json({ error: 'Transaction error' });
            }

            db.query(insertQuery, [id], (insertErr, insertResult) => {
                if (insertErr) {
                    return db.rollback(() => {
                        console.error('Error moving reservation:', insertErr);
                        res.status(500).json({ error: 'Internal server error' });
                    });
                }

                db.query(deleteQuery, [id], (deleteErr, deleteResult) => {
                    if (deleteErr) {
                        return db.rollback(() => {
                            console.error('Error deleting pending reservation:', deleteErr);
                            res.status(500).json({ error: 'Internal server error' });
                        });
                    }

                    db.commit(commitErr => {
                        if (commitErr) {
                            return db.rollback(() => {
                                console.error('Transaction commit error:', commitErr);
                                res.status(500).json({ error: 'Internal server error' });
                            });
                        }

                        res.status(200).json({ message: 'Reservation status updated successfully' });
                    });
                });
            });
        });
    } else if (status === 'declined') {
        const updateQuery = 'UPDATE pending_reservations SET status = ? WHERE id = ?';
        db.query(updateQuery, [status, id], (err, result) => {
            if (err) {
                console.error('Error updating reservation status:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Reservation not found' });
            }

            return res.status(200).json({ message: 'Reservation status updated successfully' });
        });
    }
});



// Move reservation from pending to accepted
app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const { status } = req.body;

    if (!id || !status) {
        return res.status(400).json({ error: 'ID and status are required' });
    }

    if (status === 'accepted') {
        const insertQuery = `
            INSERT INTO reservations (id, num, date, time, name, phone, request)
            SELECT id, num, date, time, name, phone, request
            FROM pending_reservations
            WHERE id = ?
        `;
        const deleteQuery = 'DELETE FROM pending_reservations WHERE id = ?';

        db.beginTransaction(err => {
            if (err) {
                return res.status(500).json({ error: 'Transaction error' });
            }

            db.query(insertQuery, [id], (insertErr, insertResult) => {
                if (insertErr) {
                    return db.rollback(() => {
                        console.error('Error moving reservation:', insertErr);
                        res.status(500).json({ error: 'Internal server error' });
                    });
                }

                db.query(deleteQuery, [id], (deleteErr, deleteResult) => {
                    if (deleteErr) {
                        return db.rollback(() => {
                            console.error('Error deleting pending reservation:', deleteErr);
                            res.status(500).json({ error: 'Internal server error' });
                        });
                    }

                    db.commit(commitErr => {
                        if (commitErr) {
                            return db.rollback(() => {
                                console.error('Transaction commit error:', commitErr);
                                res.status(500).json({ error: 'Internal server error' });
                            });
                        }

                        res.status(200).json({ message: 'Reservation status updated successfully' });
                    });
                });
            });
        });
    } else if (status === 'declined') {
        const updateQuery = 'UPDATE pending_reservations SET status = ? WHERE id = ?';
        db.query(updateQuery, [status, id], (err, result) => {
            if (err) {
                console.error('Error updating reservation status:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Reservation not found' });
            }

            return res.status(200).json({ message: 'Reservation status updated successfully' });
        });
    }
});


app.get('/starters', (req, res) => {
    const query = 'SELECT * FROM starters';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/snacks', (req, res) => {
    const query = 'SELECT * FROM snacks';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/pasta', (req, res) => {
    const query = 'SELECT * FROM pasta';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/mains', (req, res) => {
    const query = 'SELECT * FROM mains';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/desserts', (req, res) => {
    const query = 'SELECT * FROM desserts';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/drinks', (req, res) => {
    const query = 'SELECT * FROM drinks';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.post('/:category/add', (req, res) => {
    const { title, price, paragraph } = req.body;
    const category = req.params.category;
    const sql = `INSERT INTO ${category} (title, price, paragraph) VALUES (?, ?, ?)`;
    const values = [title, price, paragraph];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(`Error adding menu item to ${category}:`, err);
            res.status(500).json({ error: `Failed to add menu item to ${category}` });
        } else {
            console.log(`Menu item added to ${category} successfully`);
            res.status(200).json(result);
        }
    });
});

app.delete('/:category/remove/:title', (req, res) => {
    const { category, title } = req.params;
    const sql = `DELETE FROM ${category} WHERE title = ?`;

    db.query(sql, [title], (err, result) => {
        if (err) {
            console.error(`Error removing menu item from ${category}:`, err);
            res.status(500).json({ error: `Failed to remove menu item from ${category}` });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: `Menu item with title "${title}" not found in ${category}` });
        } else {
            console.log(`Menu item removed from ${category} successfully`);
            res.status(200).json({ message: `Menu item with title "${title}" removed successfully from ${category}` });
        }
    });
});

app.get('/reservations/count', (req, res) => {
    const query = 'SELECT SUM(num) AS totalPeople FROM reservations';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching sum of people:', err);
            res.status(500).json({ error: 'An error occurred while fetching the sum of people' });
            return;
        }
        const totalPeople = results[0].totalPeople || 0;
        const availableTables = Math.max(0, 80 - totalPeople);
        res.json({ availableTables });
    });
});
app.post('/feedback', (req, res) => {
    const { name, message } = req.body;

    const checkReservationSql = 'SELECT * FROM reservations WHERE name = ?';
    db.query(checkReservationSql, [name], (err, results) => {
        if (err) {
            console.error('Error checking reservation:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(400).json({ error: 'Sorry, you are not a customer' });
        }

        const insertFeedbackSql = 'INSERT INTO feedback (name, message) VALUES (?, ?)';
        db.query(insertFeedbackSql, [name, message], (err, result) => {
            if (err) {
                console.error('Error inserting feedback:', err);
                return res.status(500).json({ error: 'Failed to submit feedback' });
            }

            const deleteReservationSql = 'DELETE FROM reservations WHERE name = ?';
            db.query(deleteReservationSql, [name], (err, deleteResult) => {
                if (err) {
                    console.error('Error deleting reservation:', err);
                    return res.status(500).json({ error: 'Failed to delete reservation' });
                }
                console.log('Feedback submitted and reservation deleted successfully');
                res.status(200).json({ message: 'Feedback submitted' });
            });
        });
    });
});

app.get('/feedback', (req, res) => {
    const sql = 'SELECT * FROM feedback';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching feedback:', err);
            return res.status(500).json({ error: 'Failed to fetch feedback' });
        }
        res.status(200).json(results);
    });
});

app.delete('/feedback/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM feedback WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({ message: 'Feedback deleted successfully' });
        }
    });
});

app.listen(8081, () => {
    console.log("listening on port 8081");
});
