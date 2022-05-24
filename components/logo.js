import {
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { IoHome } from 'react-icons/io5'

const Logo = () => {
    return (
        <a>
            
            <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight="bold"
                ml={3}
                
                
            >
                
                
                <IoHome />
                
                
            </Text>
        </a>
    )
}

export default Logo