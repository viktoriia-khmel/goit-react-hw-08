import clsx from "clsx";
import s from './Navigation.module.css'
import { NavLink } from "react-router-dom"


const Navigation = () => {

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <div className={s.wrap}>
      <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        
        <NavLink className={buildLinkClass} to='/contacts'>
          Contacts
        </NavLink>
    </div>
  )
}

export default Navigation
