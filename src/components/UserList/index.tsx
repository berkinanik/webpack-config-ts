import UsersList from 'lib/dummyData.json';

export const UserList: React.FC = () => {
  const users = UsersList;
  return (
    <div>
      <ol>
        {users.people.map((user) => (
          <li key={user.name}>
            {user.name},{user.age}
          </li>
        ))}
      </ol>
    </div>
  );
};
