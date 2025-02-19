import { useColorModeValue } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { FaFaceFrown, FaFaceGrin, FaFaceGrinStars } from 'react-icons/fa6'

type Props = {
    rating: number
}

const Emoji = ({rating}:Props) => {
    if (rating < 3) return null

    const color = useColorModeValue('green', 'yellow')
    
    const emojiMap: {[key:number]:ReactElement} = {
        3: <FaFaceFrown color={color} />,
        4: <FaFaceGrin color={color} />,
        5: <FaFaceGrinStars color={color}/>
    }
    
    return (
        <>
            {emojiMap[rating]}
        </>
  )
}

export default Emoji
