import React from 'react';
import UserCardList from './UserCardList';
import "./SearchForm.css";

const UserCardList = (props) => {
  const { users } = props;
  return (
    <ul>
      {users.map(user => (
        <li className="user-card" key={user.login.uuid}>
      )
        <img src={user.picture.large} 
        alt={`${users.name.first} ${user.name.last}`}/>
        <p>
          {user.name.first} {user.name.last}
          </p>
      </li>
      ))}
    </ul>
  );
};
    
export default UserCardList;