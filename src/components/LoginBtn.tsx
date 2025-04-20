import { Box, Button, Spinner, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';

const LoginBtn = () => {
    const { user, loading } = useUserStore();
    if (loading) {
        return <Button px={"31px"}><Spinner size="sm" /></Button>
    }
  return (
    user ? <Text whiteSpace="nowrap">
    Welcome, {user.username}
  </Text>: <Link to={"/login"}><Button>Log in</Button></Link>
  )
}

export default LoginBtn
