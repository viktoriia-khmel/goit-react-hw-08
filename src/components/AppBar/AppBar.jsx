import clsx from "clsx";
import s from "./AppBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";


const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  
  return (
    <div className={s.wrapper}>
     
      <div>Auth</div>
      <div>Welcome, John</div>
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        
        <NavLink className={buildLinkClass} to='/contacts'>
          Contacts
        </NavLink>
        <NavLink className={buildLinkClass} to='/login'>
          Login
        </NavLink>
        <NavLink className={buildLinkClass} to='/registration'>
          Register
        </NavLink>
      </div>
      
    </div>
  );
}

export default AppBar
