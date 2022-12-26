import UserInfo from 'components/UserInfo/UserInfo';
import CardDesign from 'components/CardDesign/CardDesign';
import FollowBtn from 'components/FollowBtn/FollowBtn';

import logo from '../../img/logo.png';
import css from './UserCard.module.css';

import {
  setToLocalStorage,
  getFromLocalStorage,
} from '../../utils/localStorage';

import { useState, useEffect } from 'react';

export const UserCard = ({ cardId, user, avatar, tweets, followers }) => {
  const [following, follow] = useState(
    getFromLocalStorage(cardId) ?? false
  );

  const toggleFollow = () => {
    follow(!following);
  };

  useEffect(() => {
    setToLocalStorage(cardId, following);
  }, [following, cardId]);

  return (
    <li className={css.usercard}>
      <img className={css.logo} src={logo} alt="LOGO GOIT" />
      <CardDesign avatar={avatar} user={user} />
      <UserInfo
        tweets={tweets}
        followers={followers}
        following={following}
      />
      <FollowBtn toggleFollow={toggleFollow} following={following} />
    </li>
  );
};
