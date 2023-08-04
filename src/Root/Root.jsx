import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";



const RootLayOut = (props) => {
  
  return (
    <>
      <Header onCart={props.onCart} /> 
      <Outlet/>
    </>
  );
};

export default RootLayOut;
