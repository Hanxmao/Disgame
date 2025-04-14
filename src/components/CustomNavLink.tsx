import { Text, useColorMode } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

type Props = {
  link: string;
  text: string;
  activeLight?: string;
  inactiveLight?: string;
  activeDark?: string;
  inactiveDark?: string;
};

const CustomNavLink = ({
  link,
  text,
  activeLight = "black",
  inactiveLight = "gray",
  activeDark = "white",
  inactiveDark = "gray",
}: Props) => {
  const { colorMode } = useColorMode();
  const activeColor = colorMode === "dark" ? activeDark : activeLight;
  const inactiveColor = colorMode === "dark" ? inactiveDark : inactiveLight;
  return (
    <NavLink
      to={link}
      style={({ isActive }) => {
        return {
          color: isActive ? activeColor : inactiveColor,
          fontWeight: isActive? "500" : "inherit"
        };
      }}
    >
      <Text>{text}</Text>
    </NavLink>
  );
};

export default CustomNavLink;
