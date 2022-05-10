import Link from "next/link";
import Image from "next/image";
import {
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import styled from "@emotion/styled/"; 

const Logo = () => {
    return (
        <a>
            <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight="bold"
                ml={3}
            >
                Karl Ong
            </Text>
        </a>
    )
}

export default Logo