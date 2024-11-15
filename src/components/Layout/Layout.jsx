// import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";


const Layout = ({children}) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main> 
    </div>
  );
}

export default Layout
