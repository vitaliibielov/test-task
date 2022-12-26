import css from './UserInfo.module.css';

import addCommaToNumber from 'utils/toLocalString';

export default function UserInfo({ tweets, followers, following }) {
  return (
    <div className={css.userInfo}>
      <p>{tweets} TWEETS</p>
      <p>
        {following ? addCommaToNumber(followers + 1) : addCommaToNumber(followers)} FOLLOWERS
      </p>
    </div>
  );
}
