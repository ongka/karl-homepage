import Head from "next/head";
import Navbar from '../navbar.js'
import Footer from "../footer.js";
import {
    Box,
    Container
} from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content="Karl's homepage" />
                <meta name="author" content="Karl Ong" />
                <title>Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main