import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  ListItem,
  List,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoMailSharp, IoPhonePortraitSharp } from 'react-icons/io5'




const Page = ()  => {
  return (
  <Container>
    <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} my={10} textAlign="center" >
      Hello, I&apos;m a web developer based in Canada!
    </Box>

    <Box display={{md:'flex'}}>
      <Box flexGrow={1} >
        <Heading as="h2" variant="page-title">
          Karl Ong
        </Heading>
        <p>Web developer</p>
      </Box>
      <Box 
        flexShrink={0} 
        mt={{ base: 4, md: 0 }} 
        ml={{ md: 6 }} 
        my={5}
        textAlign="center">
        <Image 
        borderColor="whiteAlpha.800" 
        borderWidth={2} 
        borderStyle="solid" 
        maxWidth="100px" 
        display="inline-block" 
        borderRadius="full" 
        src="/images/karl1.jpg" 
        alt="Profile Image"/>
      </Box>
    </Box>

    

    <Box my={10}>
      <Heading as="h3" variant="section-title" fontSize='2xl'>
        Contact
      </Heading>
      <List>

        <ListItem>
            <Link href="mailto:karl_ong23@live.ca" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailSharp />}
              >
                karl_ong23@live.ca
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="tel:647-702-3428" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoPhonePortraitSharp />}
              >
                647-702-3428
              </Button>
            </Link>
          </ListItem>

        <ListItem>
            <Link href="https://github.com/ongka" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                ongka
              </Button>
            </Link>
          </ListItem>
          
      </List>
    </Box>

    <Box my={10}>
      <Heading as="h3" variant="section-title" fontSize='2xl' my={7}>
        Projects
      </Heading>



        {/* <Box align="center">
          <NextLink href="https://ongka.github.io/product-card/" passHref scroll={false} >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Product Card
            </Button>
          </NextLink>
        </Box> */}

        <SimpleGrid columns={[1, 2, 2]} columnGap={6} rowGap={4}>
            <Box >
            <Image
              borderRadius={12}
              src="/images/product-card.png"
              
            >
              
            </Image>

            <Link href='https://ongka.github.io/product-card/' isExternal >
              Product Card  <ExternalLinkIcon mx='2px' />
            </Link>

            </Box>

            

            <Box >
            <Image
              borderRadius={12}
              src="/images/product-website.png"
              
            >


              
            </Image>

            <Link href='https://ongka.github.io/product-website/' isExternal >
              Product Website  <ExternalLinkIcon mx='2px' />
            </Link>

            </Box>

            
              
            
            
          </SimpleGrid>
    </Box>

    
  </Container>
    
  )
}

export default Page