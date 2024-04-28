import { Box, chakra, Flex, HStack, Icon, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import siteConfig from 'config/site-config'
import { GitHubIcon, TwitterIcon } from 'components/icons'

const Header = () => {
  return (
    <chakra.header w='full'>
      <chakra.div height='4.5rem' mx='auto' maxW='2xl'>
        <Flex w='100%' h='100%' px='6' align='center' justify='space-between'>
          <Box>
            <NextLink href='/' passHref>
              <chakra.a
                display='block'
                aria-label='takaokanbe.github.io, Back to homepage'
                fontSize='lg'
                fontWeight='black'
              >
                {siteConfig.title}
              </chakra.a>
            </NextLink>
          </Box>
          <Flex>
            <HStack spacing='4' display='flex'>
              <Link
                isExternal
                aria-label='Go to takaokanbe GitHub page'
                href={siteConfig.author.github}
              >
                <Icon as={GitHubIcon} display='block' w='5' h='5' />
              </Link>
              <Link
                isExternal
                aria-label='Go to takaokanbe twitter page'
                href={siteConfig.author.twitter}
              >
                <Icon as={TwitterIcon} display='block' w='5' h='5' />
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </chakra.div>
    </chakra.header>
  )
}

export default Header
