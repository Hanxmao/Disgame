import { Box, Button, Spinner, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';

const LoginBtn = () => {
    const { user, loading } = useUserStore();
    if (loading) {
        return <Button colorScheme='teal' px={"31px"}><Spinner size="sm" /></Button>
    }
  return (
    user ? <Link to={"/user"}><Button colorScheme='cyan'>{user.username}</Button></Link>: <Link to={"/login"}><Button colorScheme='teal'>Log in</Button></Link>
  )
}

export default LoginBtn
