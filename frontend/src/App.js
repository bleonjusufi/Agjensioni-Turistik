import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'
import Offers from './Components/Pages/Offers'
import Blog from './Components/Pages/Blog'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Signup from './Components/Pages/Signup'
import Login from './Components/Pages/Login'
import NewYork from './Components/Pages/NewYork'
import BookingForm from './Components/Pages/bookingForm'
import Mykonos from './Components/Pages/Mykonos'
import Rome from './Components/Pages/Rome'
import Dashboard from './Components/Dashboard'
import Payment from './Components/Pages/Payment';
import UsersList from './Components/dashPages/userList/usersList';
import Employees from './Components/dashPages/Employees/employees';
import AddEmployee from './Components/dashPages/Employees/addEmployee';
import UpdateEmployee from './Components/dashPages/Employees/updateEmployee';
import DeleteEmployee from './Components/dashPages/Employees/deleteEmployee';
import OffersManagement from './Components/dashPages/Offers/offersManagement';
import AddOffer from './Components/dashPages/Offers/addOffer';
import UpdateOffer from './Components/dashPages/Offers/updateOffer';
import DeleteOffer from './Components/dashPages/Offers/deleteOffer';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/offers' element = {<Offers />} />
          <Route path='/blog' element = {<Blog />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/signup' element = {<Signup />} />
          <Route path='/NewYork' element = {<NewYork />} />
          <Route path='/login' element = {<Login />} / >
          <Route path='/bookingForm' element = {<BookingForm />} />
          <Route path='/Mykonos' element = {<Mykonos />} />
          <Route path='/Rome' element = {<Rome />} />
          <Route path='/payment' element = {<Payment />} />
          <Route path='/Dashboard' element = {<Dashboard />} />
          <Route path='/users' element = {<UsersList />} />
          <Route path='/employees' element = {<Employees />} />
          <Route path='/addEmployee' element = {<AddEmployee />} />
          <Route path='/updateEmployee/:id' element = {<UpdateEmployee />} />
          <Route path='/deleteEmployee/:id' element = {<DeleteEmployee />} />
          <Route path='/offersManagement' element = {<OffersManagement />} />
          <Route path='/addOffer' element = {<AddOffer />} />
          <Route path='/updateOffer/:id' element = {<UpdateOffer />} />
          <Route path='/deleteOffer/:id' element = {<DeleteOffer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
