import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
