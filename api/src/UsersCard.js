import React from 'react'  
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersCard = ({ user }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: {user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Username: {user.username}</h6>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
            <br />
            <strong>Address:</strong> {user.address.street}, {user.address.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsersCard
