import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  VStack,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/authService";

export default function Signup() {
  const toast = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast({ title: "Account created!", status: "success" });
      navigate("/");
    },
    onError: (err: any) => {
      toast({
        title: "Signup failed",
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
    signupMutation.mutate(form);
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Heading mb={6}>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={form.email}
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
            isLoading={signupMutation.isLoading}
          >
            Sign Up
          </Button>

          <HStack>
        <Text>Already have an account? </Text>
        <Link to={"/login"}>
          <Text color={"teal.500"}>Log In</Text>
        </Link>
      </HStack>
        </VStack>
      </form>
    </Box>
  );
}
