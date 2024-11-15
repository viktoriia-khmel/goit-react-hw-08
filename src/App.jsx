
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/HomePage/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Login from './pages/LoginPage/Login';
import Registration from './pages/RegistrationPage/Registration';
import { refresh } from './redux/auth/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import ContactsPage from './pages/ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch])
const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);

  return isRefreshing ? (
    <h2>Loading</h2>
  ) : (
    <Layout>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='contacts' element={<PrivateRoute component={<ContactsPage /> } redirectTo='/login' />} />
        <Route path='login' element={<RestrictedRoute component={<Login />} redirectTo='/contacts' />} />
        <Route path='register' element={<RestrictedRoute component={<Registration />} redirectTo='/contacts' />} />
      
      <Route path='*' element={<NotFoundPage /> } />
        </Routes>
    </Layout>
  );
};

export default App
