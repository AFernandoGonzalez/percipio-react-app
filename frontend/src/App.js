import './App.css';
import UserList from './components/User/UserList'
import Header from './shared/components/layout/Header'
import Footer from './shared/components/layout/Footer'

// reducer
import UserForm from './components/User/UserForm';

function App() {


  return (
    <div className="">
      <Header title='Create user' />
      <h1 className='container mt-4'>Users-Tracker</h1>
      <UserForm />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
