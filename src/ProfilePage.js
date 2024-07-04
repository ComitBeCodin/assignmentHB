import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      
      <form className="profile-form">
        <div className="left-section">
          <label htmlFor="name">Name</label>
          <input className="momo" type="text" id="name" name="name" defaultValue="Mehrab Bozorgi" />

          <label htmlFor="email">Email</label>
          <input className="momo" type="email" id="email" name="email" defaultValue="mehrabbozorgi.business@gmail.com" />

          <label htmlFor="contact">Contact Number</label>
          <input className="momo" type="text" id="contact" name="contact" defaultValue="58077.79" />

          <div className="form-row">
            <div>
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" defaultValue="Mehrab" style={{backgroundColor:"lightgray",height:"69.19px",width:"17vw"}}>
                <option value="Mehrab">Mehrab</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob">DOB</label>
              <input className="momo" type="text" id="dob" name="dob" defaultValue="Bozorgi" />
            </div>
          </div>

          <label htmlFor="user-id">User ID</label>
          <input className="momo" type="text" id="user-id" name="user-id" defaultValue="33062 Zboncak isle" />

          <label htmlFor="password">Password</label>
          <input className="momo" type="password" id="password" name="password" defaultValue="sbdbfnd65sfdvb s" />

          <label htmlFor="class-categories">Class Categories</label>
          <textarea id="class-categories" name="class-categories" rows="3">
            Yoga for flexibility, elderly, beginner level classes for all.
          </textarea>

          <label htmlFor="available-timings">Available Timings</label>
          <input className="momo" type="text" id="available-timings" name="available-timings" defaultValue="7-10 AM, 4-7 PM" />
          <div className="profile-buttons">
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="save">Save</button>
        </div>
        </div>

        <div className="right-section">
        <div className="profile-header">
        <img src="https://via.placeholder.com/300x300" alt="Profile" />
        <h2>Profile</h2>
      </div>
          <label htmlFor="about">About</label>
          <textarea id="about" name="about" rows="5">
            Mehrab Bozorgi
          </textarea>

          <div className="pricing">
            <h3>Pricing</h3>
            <ul>
              <li>Thrice a week: $___</li>
              <li>Twice a week: $___</li>
              <li>Monday to Friday: $___</li>
              <li>Elderly Batch: $___</li>
            </ul>
          </div>
        </div>

      
      </form>
    </div>
  );
};

export default ProfilePage;
