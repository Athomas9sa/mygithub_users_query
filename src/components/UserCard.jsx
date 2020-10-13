import React from 'react';
import UserCard from './UserCard';
import "./SearchForm.css";

const UserCard = (props) => {
  const { user } = props;
  return (
    <ul>
      {user.map(user => (
        <li className="user-card" key={user.login.uuid}>
      )
        <img src={user.picture.large} 
        alt={`${user.name.first} ${user.name.last} ${user.name.avatar_url}`}/>
        <p>
          {user.name.first} {user.name.last}
          </p>
      </li>
      ))}
    </ul>
  );
};
    
export default UserCard;