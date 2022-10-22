import './App.css';
import UserList from './components/User/UserList'
import Header from './shared/components/layout/Header'
import Footer from './shared/components/layout/Footer'

// reducer
import CreateUserForm from './components/User/CreateUserForm';
import UpdateUserForm from './components/User/UpdateUserForm';
import SingleUser from './components/User/SingleUser';

// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="">
      <Header />
      <div className='container'>
        <h1 className='mt-4'>Users-Tracker</h1>
      </div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/user/:id' element={<SingleUser />} />
          <Route path='/create-user' element={<CreateUserForm />} />
          <Route path='/edit-user/:id' element={<UpdateUserForm />} />
        </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
