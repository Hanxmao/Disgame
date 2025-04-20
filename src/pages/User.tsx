import { Button } from "@chakra-ui/react"
import { useUserStore } from "../stores/userStore"
import { useNavigate } from "react-router"

const User = () => {
    const{logout} = useUserStore()
    const navigate = useNavigate()

    const handleLogout = async()=>{
        await logout()
        navigate("/")
    }
  return (
    <div>
      <Button colorScheme="red" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  )
}

export default User
