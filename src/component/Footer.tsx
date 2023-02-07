
import {
    Box,
    Flex,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    VStack,
    Divider,
    Icon,
  } from "@chakra-ui/react";
  import React from "react";
  import { GrInstagram } from "react-icons/gr";
  import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";
  
function Footer() {
  return (
    <div>
        <Box mt='20' bg="#FFFFF0" _dark={{ bg: "gray.600" }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        w="full"
        justify="space-between"
        p={10}
      >
        <Flex justify="center">
          <Image
            src="http://placehold.jp/2a2a2c/ffffff/200x100.png?text=Company%20Logo&css=%7B%22font-size%20%22%3A%22%2016px%22%7D"
            alt="Company Logo"
            rounded="lg"
            width={{ base: "150px", lg: "200px" }}
            height={{ base: "75px", lg: "100px" }}
            my={{ base: 2, lg: 0 }}
          />
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{ base: "12px", md: "16px" }}
          color="gray.800"
          _dark={{ color: "black" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase" color='black'>Pre-Sale FAQS</Link>
            <Link textTransform="uppercase" color='black'>Submit a ticket</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase" color='black'>Services</Link>
            <Link textTransform="uppercase" color='black'>Theme Tweak</Link>
          </Flex>
        </HStack>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{ base: "12px", md: "16px" }}
          color="gray.800"
          _dark={{ color: "black" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase" color='black'>Show Case</Link>
            <Link textTransform="uppercase" color='black'>Widget Kit</Link>
            <Link textTransform="uppercase" color='black'>Support</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase" color='black'>About Us</Link>
            <Link textTransform="uppercase" color='black'>Contact Us</Link>
            <Link textTransform="uppercase" color='black'>Resources</Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider
        w="95%"
        mx="auto"
        color='black'
        _dark={{ color: "#F9FAFB" }}
        h="3.5px"
      />
      <VStack py={3}>
        <HStack justify="center">
          <Link href='https://www.facebook.com/' isExternal>
            <Icon
              color='black'
              _dark={{ color: "black" }}
              h="20px"
              w="20px"
              as={FaFacebookF}
            />
          </Link>
          <Link href='https://twitter.com/' isExternal>
            <Icon
              color='black'
              _dark={{ color: "black" }}
              h="20px"
              w="20px"
              as={FiTwitter}
            />
          </Link>
          <Link href='https://Instagram.com/' isExternal>
            <Icon
            color='black'
              _dark={{ color: "black" }}
              h="20px"
              w="20px"
              as={GrInstagram}
            />
          </Link>
          <Link >
            <Icon
              _dark={{ color: "black" }}
              h="0px"
              w="20px"
              as={FaLinkedinIn}color='black'
            />
          </Link>
        </HStack>

        <Text textAlign="center" fontSize="smaller" _dark={{ color: "black" }} color='black'>
          &copy;Copyright. All rights reserved.
        </Text>
      </VStack>
    </Box>
      
    </div>
  )
}

export default Footer
