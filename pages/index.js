import {
  Box,
  Container,
  Heading
} from '@chakra-ui/react'

const Page = ()  => {
  return (
  <Container>
    <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
      Hello, I&apos;m a web developer based in Canada!
    </Box>

    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Karl Ong
        </Heading>
        <p>Web developer</p>
      </Box>
    </Box>
  </Container>
    
  )
}

export default Page