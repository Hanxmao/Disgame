import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { axiosInstance } from "../services/api-client";
import { useUserStore } from "../stores/userStore";
import { useNavigate } from "react-router";

const avatarOptions = Array.from(
  { length: 8 },
  (_, i) => `/avatars/avatar${i + 1}.jpeg`
);

export default function EditUserPage() {
  const { user, setUser } = useUserStore();
  const toast = useToast();
  const navigate = useNavigate()

  const [username, setUsername] = useState(user?.username || "");
  const [selectedAvatar, setSelectedAvatar] = useState(
    user?.avatarUrl || avatarOptions[0]
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.put(`/users/${user?._id}`, {
        username,
        avatarUrl: selectedAvatar,
      });
      setUser(res.data); // update Zustand state
      toast({
        title: "Profile updated!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/user"); 
    } catch (err: any) {
      if (err.response?.status === 409) {
        toast({
          title: "Username already taken.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to update profile.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="600px" mx="auto" mt={10}>
      <Heading mb={6}>Edit Profile</Heading>
      <FormControl mb={4}>
        <FormLabel>Username</FormLabel>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Select Avatar</FormLabel>
        <SimpleGrid columns={4} spacing={4}>
          {avatarOptions.map((url) => (
            <GridItem
              key={url}
              border={
                url === selectedAvatar
                  ? "2px solid teal"
                  : "2px solid transparent"
              }
              borderRadius="md"
              p={1}
              cursor="pointer"
              onClick={() => setSelectedAvatar(url)}
            >
              <Avatar src={url} size="lg" />
            </GridItem>
          ))}
        </SimpleGrid>
      </FormControl>

      <Button onClick={handleSubmit} isLoading={loading} colorScheme="teal">
        Save Changes
      </Button>
    </Box>
  );
}
