import style from "../FriendListItem/friendListItem.module.css"
// import styled from "styled-components";

// const Item = styled.li`
//     // width: 150px;
//     // display: flex;
// `

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className ={style.list}>
      <div className={
        isOnline ? style.isOnline : style.isOffline
    }> </div>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={`${name} avatar `} width="40" />
      <p className="name">{name}</p>
    </li>
  );
};
