import styled from 'styled-components';
import style from './profile.module.css';
import PropTypes from 'prop-types';

const Image = styled.img`
  width: 250px;
  border-radius: 50%;
`;
const List = styled.ul`
  display: flex;
  gap: 5px;
  padding: 15px;
  list-style: none;
`;

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className="description">
        <Image src={avatar} alt={username} className={style.avatar} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <List className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers} </span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </List>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
