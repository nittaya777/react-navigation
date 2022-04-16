import {
    BsFillHouseDoorFill,
    BsFillPersonFill,
    BsCartFill,
  } from "react-icons/bs";
const MenuData = [
  {
    title: "Home",
    path: "/",
    icon: <BsFillHouseDoorFill/>,
  },
  {
    title: "Members",
    path: "/member",
    icon: <BsFillPersonFill/>,
  },
  {
    title: "Products",
    path: "/product",
    icon: <BsCartFill/>,
  },
];
export default MenuData;
