import css from './FollowBtn.module.css';

export default function FollowBtn({ toggleFollow, following }) {
  return (
    <button
      style={{ backgroundColor: following ? '#5CD3A8' : '#ebd8ff' }}
      onClick={toggleFollow}
      className={css.button}
      type="button"
    >
      {following ? 'following' : 'follow'}
    </button>
  );
}
