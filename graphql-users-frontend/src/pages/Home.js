import CreateUser from '../components/CreateUser';
import UserList from '../components/UserList';

const Home = () => {
  return (
    <div>
      <h1>GraphQL Users App</h1>
      <CreateUser />
      <UserList />
    </div>
  );
};

export default Home;
