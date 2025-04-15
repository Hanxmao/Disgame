import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box p={5} maxW={"1800px"} mx={"auto"}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
