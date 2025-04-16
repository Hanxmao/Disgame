import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  useToast,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export default function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({ usernameOrEmail: "", password: "" });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast({ title: "Logged in!", status: "success" });
      navigate("/dashboard");
    },
    onError: (err: any) => {
      toast({
        title: "Login failed",
        description: err.message,
        status: "error",
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(form);
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Heading mb={6}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Username or Email</FormLabel>
            <Input
              name="usernameOrEmail"
              value={form.usernameOrEmail}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            width="full"
            isLoading={loginMutation.isLoading}
          >
            Login
          </Button>
          <HStack>
            <Text>New to us? </Text>
            <Link to={"/sign-up"}>
              <Text color={"teal.500"}>Sign Up</Text>
            </Link>
          </HStack>
        </VStack>
      </form>
    </Box>
  );
}
