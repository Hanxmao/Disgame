import { Button, HStack, Show, Text } from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa6";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingInline="10px" gap={10}>
      <NavLink to={"/"}>
        <HStack>
          <FaGamepad size={50} />
          <Show above="md">
            <Text fontSize={22} fontWeight={"bold"}>
              DisGame
            </Text>
          </Show>
        </HStack>
      </NavLink>
      <HStack justifyContent={"flex-start"} width={"100%"}>
      <SearchBar />
      <NavLinks />
      </HStack>
      <HStack>
      <ColorModeSwitch />
      <Link to={"/login"}><Button>Log in</Button></Link>
      </HStack>
    </HStack>
  );
};

export default Navbar;
