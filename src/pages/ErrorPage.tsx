import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar />
      <Box p={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "Page does not exist" : "An error occurred"}
        </Text>
      </Box>
    </div>
  );
};

export default ErrorPage;
