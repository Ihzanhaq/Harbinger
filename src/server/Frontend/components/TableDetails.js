import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Reservation.css';

function TableDetails({ status, handleSubmit, name, phone, req, setName, setPhone, setReq, errors, username }) {

  const phonefun = (e) => {
    setPhone(e.target.value);
  };

  const reqfun = (e) => {
    setReq(e.target.value);
  };

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <div>
        <form style={{ border: '1px solid black', padding: '60px', borderRadius: '10px' }} onSubmit={handleSubmit}>
          <div className='row res-row'>
            <div className='col-md-6 p-3'>
              <input type='text' name='name' value={username} readOnly placeholder='Enter your name' className='nameInput'></input>
            </div>
            <div className='col-md-6 p-3'>
              <input type='text' name='phone' onChange={phonefun} placeholder='Enter your Phone Number' className='nameInput'></input>
              {errors.phone && <span>{errors.phone}</span>}
            </div>
          </div>
          <div className='row res-row pb-4'>
            <div className='col-md-12 p-3'>
              <input type='text' name='request' onChange={reqfun} placeholder='Any special requests (Optional)' className='nameInput'></input>
            </div>
          </div>
          <Button type="submit" className="find-table-button" variant="dark">Find a Table</Button>
          <div className='pt-4'>
            {status?.type === 'success' && <p style={{ color: 'green' }}> is Registered successfully</p>}
            {status?.type === 'error' && <p style={{ color: 'red' }}>{status.message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default TableDetails;
