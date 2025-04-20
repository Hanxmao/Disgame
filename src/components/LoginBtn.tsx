import { Box, Button, Spinner, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';

const LoginBtn = () => {
    const { user, loading } = useUserStore();
    if (loading) {
        return <Button px={"31px"}><Spinner size="sm" /></Button>
    }
  return (
    user ? <Link to={"/user"}><Button>{user.username}</Button></Link>: <Link to={"/login"}><Button>Log in</Button></Link>
  )
}

export default LoginBtn
