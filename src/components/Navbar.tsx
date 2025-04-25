import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Show,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Icon from "/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import CustomNavLink from "./CustomNavLink";
import LoginBtn from "./LoginBtn";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        justifyContent="space-between"
        paddingInline="20px"
        gap={4}
        py={"10px"}
      >
        {/* Left side: Logo */}
        <NavLink to={"/"}>
          <HStack spacing={2}>
            <Image width={{ base: "40px", md: "60px" }} src={Icon} />
            <Show above="md">
              <Text fontSize={22} fontWeight="bold">
                DisGame
              </Text>
            </Show>
          </HStack>
        </NavLink>

        {/* Center: SearchBar always visible */}
        <HStack flex="1" mx={4}>
          <SearchBar />
          <Show above="md">
            <NavLinks />
          </Show>
        </HStack>

        {/* Right side: Desktop nav + mobile menu button */}
        <Show above="md">
          <HStack spacing={4}>
            <ColorModeSwitch />
            <LoginBtn />
          </HStack>
        </Show>

        <Show below="md">
          <IconButton
            aria-label="Open menu"
            icon={<FaBars />}
            variant="outline"
            onClick={onOpen}
          />
        </Show>
      </HStack>

      {/* Drawer for mobile nav */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={10}>
            <VStack align="start" spacing={4}>
              <CustomNavLink text="Discovery" link="/" />
              <CustomNavLink text="Browse" link="/games" />
              <CustomNavLink text="Event" link="/event" />
              <HStack w={"100%"} justifyContent={"space-between"}>
                <ColorModeSwitch />
                <LoginBtn />
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
