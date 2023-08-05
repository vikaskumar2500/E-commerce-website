import { Outlet } from "react-router-dom";
// import Header from "../components/Header/Header";
import Header from "../components/Header/Header";

const RootLayOut = (props) => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default RootLayOut;
