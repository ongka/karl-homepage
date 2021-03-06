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
  SimpleGrid,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoMailSharp, IoPhonePortraitSharp } from 'react-icons/io5'
import { InfoSection, InfoYear } from '../components/info'


{/*Header section */}
const Page = ()  => {
  return (
  <Container>
    <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} my={10} textAlign="center" >
      Hello, I&apos;m a software developer based in Canada!
    </Box>

    <Box display={{md:'flex'}}>
      <Box flexGrow={1} >
        <Heading as="h2" variant="page-title">
          Karl Ong
        </Heading>
        <p>Software Developer</p>
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

    {/*info*/}
    <Box my={0}>
        <Heading as="h3" variant="section-title" fontSize='2xl'>
          Education
        </Heading>
        <InfoSection>
          <InfoYear>2022</InfoYear>
          Diploma, Software Engineering
          at
          Sheridan College
        </InfoSection>
        
    </Box>
    
    {/*Contact section */}
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


    {/*Projects section */}
    <Box my={10}>
      <Heading as="h3" variant="section-title" fontSize='2xl' my={7}>
        Projects
      </Heading>


        <SimpleGrid columns={[1, 2, 2]} columnGap={6} rowGap={4}>


            {/*project 1*/}
            <Box >
            <Image
              borderRadius={12}
              src="/images/product-website.png"
              
            >
            </Image>

            <Link href='https://ongka.github.io/product-page/' isExternal >
              Product page  <ExternalLinkIcon mx='2px' />
            </Link>

            </Box>


          {/*project 2*/}
          <Box >
            <Image
              borderRadius={12}
              src="/images/product-card.png"
              
            >
              
            </Image>

            <Link href='https://ongka.github.io/product-card/' isExternal >
              Product card  <ExternalLinkIcon mx='2px' />
            </Link>

            </Box>

            {/*project 3*/}


            <Box >
            <Image
              borderRadius={12}
              src="/images/company-website.png"
            >
            </Image>
            <Link href='https://ongka.github.io/company-website/' isExternal >
              Company website  <ExternalLinkIcon mx='2px' />
            </Link>

            </Box>

            
            

            
          </SimpleGrid>
    </Box>

    
  </Container>
    
  )
}

export default Page