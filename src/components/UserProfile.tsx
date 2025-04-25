import {
    Avatar,
    Box,
    Button,
    Heading,
    HStack,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
    
  export default function UserProfile() {
    const { user, logout } = useUserStore();
    const navigate = useNavigate();
    const cardBg = useColorModeValue("white", "gray.600");
  
    const handleLogout = () => {
      logout();
      navigate("/login");
    };
  
    if (!user) {
      return <Text>Please log in to view your profile.</Text>;
    }
  
    return (
      <Box maxW="500px" mx="auto" mt={10} p={6} borderRadius="lg" bg={cardBg} boxShadow="lg">
        <Stack spacing={5} align="center">
          <Avatar size="xl" src={user.avatarUrl} name={user.username} />
          <Heading size="md">{user.username}</Heading>
          <Text colorScheme="gray">{user.email}</Text>
  
          <HStack>
            <Link to={"/edit"}>
            <Button colorScheme="teal">
              Edit Profile
            </Button>
            </Link>
            <Button colorScheme="red" variant="outline" onClick={handleLogout}>
              Log Out
            </Button>
          </HStack>
        </Stack>
      </Box>
    );
  }