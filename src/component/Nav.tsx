
import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import LogOut from "./LogOut";
import setQuery from './HomePage'
function Nav() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
  
    return (
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{ base: 2, sm: 4 }}
          py={4}
          shadow="md"
          mb="10"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <HStack display="flex" spacing={3} alignItems="center">
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{ color: "inherit" }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                  />
                  <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                    Dashboard
                  </Button>
                  <Button
                    w="full"
                    variant="solid"
                    colorScheme="brand"
                    leftIcon={<AiOutlineInbox />}
                  >
                    Inbox
                  </Button>

                </VStack>
              </Box>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>
  
              <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
                <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                  Dashboard
                </Button>
                <Button
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                  size="sm"
                >
                  Inbox
                </Button>
 
              </HStack>
            </HStack>
            <HStack
              spacing={3}
              display={mobileNav.isOpen ? "none" : "flex"}
              alignItems="center"
            >
              {/* <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                
                <Input type="tel" placeholder="Search..." />
              </InputGroup> */}
  
              <chakra.a
                p={3}
                color="gray.800"
                _dark={{ color: "inherit" }}
                rounded="sm"
                _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
              >
                <AiFillBell />
                <VisuallyHidden>Notifications</VisuallyHidden>
              </chakra.a>
  
              <Avatar
                size="sm"
                name=""
                src=""
              ><LogOut/></Avatar>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
}

export default Nav