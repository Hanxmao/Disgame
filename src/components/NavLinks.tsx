import { DarkMode, HStack, Text, useColorMode } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

const NavLinks = () => {
    const { colorMode } = useColorMode()
    const activeColor = colorMode === "light"? "black" : "gray"
    const inactiveColor = colorMode === "light"? "white" : "gray"
  return (
    <HStack>
        <CustomNavLink text="Discovery" link="/" />
        <CustomNavLink text="Browse" link="/games" />
        <CustomNavLink text="Event" link="/event" />
    </HStack>
  );
};

export default NavLinks;
