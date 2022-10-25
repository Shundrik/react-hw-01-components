import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { FriendList } from './FriendsList/FriendList';
import friends from '../data/friends.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json'


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>

      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <TransactionHistory items={transactions} />
    </>
  );
};
