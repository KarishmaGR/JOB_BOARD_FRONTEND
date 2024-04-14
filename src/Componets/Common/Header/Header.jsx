import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user && user.role === "admin" ? (
        <>
          <Navbar />
          <SideNav />
        </>
      ) : (
        <Navbar />
      )}
    </>
  );
};
export default Header;
