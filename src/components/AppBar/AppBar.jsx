import clsx from "clsx";
import s from "./AppBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


const AppBar = () => {

    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  
  return (
    <div className={s.wrapper}>
     
      <div>Auth</div>
      {isLoggedIn && <div>Welcome, {user.name}</div>}
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        
        <NavLink className={buildLinkClass} to='/contacts'>
          Contacts
        </NavLink>
              {!isLoggedIn && (
                  <>
                      <NavLink className={buildLinkClass} to='/login'>
                          Login
                      </NavLink>
                      <NavLink className={buildLinkClass} to='/register'>
                          Register
                      </NavLink>
                  </>
              )
              }
              {isLoggedIn && <button onClick={() => dispatch(logout())} className="btn btn-secondary">Exit</button>}
      </div>
      
    </div>
  );
}

export default AppBar
