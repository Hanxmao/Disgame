import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useUserStore } from "../stores/userStore";

const Layout = () => {
  const fetchUser = useUserStore((s) => s.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);

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
