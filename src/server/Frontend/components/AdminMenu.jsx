import React, { useState } from 'react';
import axios from 'axios';

function AdminMenu() {
    const [menuItem, setMenuItem] = useState({
        title: '',
        price: '',
        paragraph: '',
        category: 'starters' // Default category selection
    });

    const [removeTitle, setRemoveTitle] = useState('');
    const [removeCategory, setRemoveCategory] = useState('starters'); // Default category selection for removal

    const [addStatus, setAddStatus] = useState(null); // To display add status
    const [removeStatus, setRemoveStatus] = useState(null); // To display remove status

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMenuItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddMenuItem = () => {
        axios.post(`http://localhost:8081/${menuItem.category}/add`, menuItem)
            .then(response => {
                console.log('Menu item added successfully:', response.data);
                setAddStatus('Menu item added successfully');
                // Optionally, you can update state or show a success message
            })
            .catch(error => {
                console.error('Error adding menu item:', error);
                if (error.response) {
                    console.error('Server error:', error.response.data);
                    setAddStatus(`Error adding menu item: ${error.response.data.error}`);
                } else if (error.request) {
                    console.error('Network error:', error.request);
                    setAddStatus('Error: Network issue, please try again later.');
                } else {
                    console.error('Error:', error.message);
                    setAddStatus('Error: Something went wrong, please try again.');
                }
            });
    };

    const handleRemoveMenuItem = () => {
        axios.delete(`http://localhost:8081/${removeCategory}/remove/${removeTitle}`)
            .then(response => {
                console.log('Menu item removed successfully:', response.data);
                setRemoveStatus('Menu item removed successfully');
                // Optionally, you can update state or show a success message
            })
            .catch(error => {
                console.error('Error removing menu item:', error);
                if (error.response && error.response.status === 404) {
                    setRemoveStatus('Error: Menu item not found');
                } else {
                    setRemoveStatus('Error removing menu item');
                }
                // Handle error state or show error message
            });
    };

    return (
        <div className="admin-menu Res-admin-body container">
            <h1 className='Res-admin-head'>Add Menu Item</h1>
            <form>
                <div className="form-row">
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="form-input"
                        value={menuItem.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Price"
                        name="price"
                        className="form-input"
                        value={menuItem.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-row">
                    <input
                        placeholder="Description"
                        name="paragraph"
                        className="form-input"
                        value={menuItem.paragraph}
                        onChange={handleInputChange}
                    />
                    <select
                        name="category"
                        className="form-input"
                        value={menuItem.category}
                        onChange={handleInputChange}
                    >
                        <option value="starters">Starters</option>
                        <option value="snacks">Snacks</option>
                        <option value="pasta">Pasta</option>
                        <option value="mains">Mains</option>
                        <option value="drinks">Drinks</option>
                        <option value="desserts">Desserts</option>
                    </select>
                </div>
                <button type="button" className='Admin-menu-button' onClick={handleAddMenuItem}>Add Menu Item</button>
                {addStatus && <p>{addStatus}</p>}
            </form>
            <h1 className='Res-admin-head'>Remove Menu Item</h1>
            <form>
                <input
                    type="text"
                    placeholder="Title"
                    className="form-input"
                    value={removeTitle}
                    onChange={(e) => setRemoveTitle(e.target.value)}
                />
                <select
                    className="form-input"
                    value={removeCategory}
                    onChange={(e) => setRemoveCategory(e.target.value)}
                >
                    <option value="starters">Starters</option>
                    <option value="snacks">Snacks</option>
                    <option value="pasta">Pasta</option>
                    <option value="mains">Mains</option>
                    <option value="drinks">Drinks</option>
                    <option value="desserts">Desserts</option>
                </select>
                <div className="pb-4">
                    <button className='Admin-menu-button' type="button" onClick={handleRemoveMenuItem}>Remove Menu Item</button>
                    {removeStatus && <p>{removeStatus}</p>}
                </div>
            </form>
        </div>
    );
}

export default AdminMenu;


