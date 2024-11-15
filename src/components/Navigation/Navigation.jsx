import clsx from "clsx";
import s from './Navigation.module.css'
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


const Navigation = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn)
const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <div className={s.wrap}>
      <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        {isLoggedIn && <NavLink className={buildLinkClass} to='/contacts'>
          Contacts
        </NavLink>}
        
    </div>
  )
}

export default Navigation
