import './App.css';
import UserList from './components/User/UserList'
import Header from './shared/components/layout/Header'
import Footer from './shared/components/layout/Footer'

// reducer
import UserForm from './components/User/UserForm';

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
          <Route path='/create-user' element={<UserForm />} />
          <Route path='/edit-user/:id' element={<UserForm />} />
        </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
