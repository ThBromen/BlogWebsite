import React, { useState } from 'react';
import avatarImage from "../images/author2.jpg";
import { FaEdit, FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(avatarImage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <section className='profile'>
      <div className='container profile__container'>
        <Link to={'/myposts/sdfsdf'} className='btn'>My posts</Link>
        <div className='profile__details'>
          <div className='avatar__wrapper'>
            <div className='profile__avatar'>
              <img src={avatar} alt="User Avatar" />
            </div>
            {/* form to update avatar */}
            <form className='avatar__form'>
              <input type="file" name='avatar' id='avatar' onChange={handleAvatarChange} accept='image/png, image/jpg, image/jpeg' />
              <label htmlFor="avatar"><FaEdit /></label>
            </form>
            <button className='profile__avatar-btn'><FaCheck /></button>
          </div>
          <h1>Bromen</h1>

          {/* form to update user details */}
          <form className='profile__form'>
            <p className='form__error-message'>this is error message</p>
            <input type="text" placeholder='Full name' value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <input type="password" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            <button type='submit' className='btn primary'>Update details</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
