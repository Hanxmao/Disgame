import { useParams } from 'react-router'

const GameDetailPage = () => {
    const params = useParams()
    console.log(params);
    
  return (
    <div>
      GameDetailPage
    </div>
  )
}

export default GameDetailPage
