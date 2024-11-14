import s from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export const AppBar = () => {
const isLoggedIn = useSelector(selectIsLoggedIn)
  return (     
      <div className={s.wrapperLinks}>
        <Navigation />
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
              
      </div>
  );
}


