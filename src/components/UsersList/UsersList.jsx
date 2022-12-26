import React from 'react';

import { UserCard } from 'components/UserCard/UserCard';

import users from '../../data/users.json';

import css from './UsersList.module.css';

export default function UsersList() {
  return (
    <ul className={css.gallery}>
      {users.map(({ id, user, avatar, tweets, followers }) => (
        <UserCard
          key={id}
          cardId={id}
          user={user}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </ul>
  );
}
