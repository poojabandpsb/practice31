

import React, { useState, useEffect } from 'react';


const Profile = () => {
  const [user, setUser] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    PhotoID: '',
    Address: '',
    City: '',
    State: '',
    Country: '',
    PostalCode: '',
    Y1: '',
    Y2: ''
  });
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    // Fetch user data from the server
    // Assuming you have an API endpoint that returns user data
    // const fetchUserData = async () => {
    //   const response = await fetch('http://localhost:4000/user/profile'); // Change the URL as needed
    //   const result = await response.json();
    //   setUser(result.data);
    // };

    // fetchUserData();
  }, []);

  return (
    <div className="container mt-5">
      <header className="bg-dark text-white p-4">
        <div className="container">
          <h4 className="display-4">User Profile</h4>
      
        </div>
        </header>
      <div className="card">
        <div className="card-header">
          <h4>{`${user.FirstName} ${user.LastName}`}</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 text-center">
              {user.PhotoID ? (
                <img src={user.PhotoID} alt="User" className="img-thumbnail" />
              ) : (
                <img src="https://via.placeholder.com/150" alt="User" className="img-thumbnail" />
              )}
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item"><strong>Email:</strong> {user.Email}</li>
                <li className="list-group-item"><strong>Phone Number:</strong> {user.PhoneNumber}</li>
                <li className="list-group-item"><strong>Address:</strong> {user.Address}</li>
                <li className="list-group-item"><strong>City:</strong> {user.City}</li>
                <li className="list-group-item"><strong>State:</strong> {user.State}</li>
                <li className="list-group-item"><strong>Country:</strong> {user.Country}</li>
                <li className="list-group-item"><strong>Postal Code:</strong> {user.PostalCode}</li>
               
              </ul>
              <div className="mt-3">
                {editMode ? (
                  <button  className="btn btn-primary mr-2">Save</button>
                ) : (
                  <button onClick={() => setEditMode(true)} className="btn btn-secondary mr-2">Edit</button>
                )}
                <button  className="btn btn-danger">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
