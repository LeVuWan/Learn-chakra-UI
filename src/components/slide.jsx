import {
  AtSignIcon,
  CalendarIcon,
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { List, ListIcon, ListItem, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const defaultIconSize = "1.875rem";

const Slide = () => {
  const [isNavIcon, setIsNavIcon] = useState(false);
  return (
    <>
      <BiMenu
        className="cursor-pointer md:hidden "
        size={defaultIconSize}
        onClick={() => {
          setIsNavIcon(!isNavIcon);
        }}
      />
      <List
        color="white"
        fontSize="1.2em"
        spacing={4}
        className={` mx-4 my-2${isNavIcon ? "" : " hidden"} md:block`}
      >
        <ListItem>
          <NavLink to="/">
            <ListIcon as={CalendarIcon} color="white" />
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/create">
            <ListIcon as={EditIcon} color="white" />
            New Task
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/profile">
            <ListIcon as={AtSignIcon} color="white" />
            Profile
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};

export default Slide;
