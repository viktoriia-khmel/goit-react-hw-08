
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/HomePage/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ContactsPage from './pages/ContactsPage/contactsPage';
import Login from './pages/LoginPage/Login';
import Registration from './pages/RegistrationPage/Registration';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch])

  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='login' element={<Login />} />
        <Route path='registration' element={<Registration />} />
        

      </Route>
      <Route path='*' element={<NotFoundPage /> } />
    </Routes>
  );
};

export default App
