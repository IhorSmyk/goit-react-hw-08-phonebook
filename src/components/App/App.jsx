import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getUser } from 'redux/thunks/operationsThunk';
import { NavBar } from 'components/NavBar/Navbar';
import { Register } from 'components/Register/Register';
import { Login } from 'components/Login/Login';
import { Contacts } from 'components/Contacts/Contacts';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<div className={s.title}>Phonebook</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
