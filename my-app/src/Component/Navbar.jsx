import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart, IconName } from "react-icons/ai";
const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent={'space-evenly'}>
        <Box>
          <Flex>
          <Text fontSize={'xxx-large'} color={'blue'} fontFamily={"revert-layer"}></Text>
          <Input placeholder="search your favroutes items" w={"20rem"} />
          </Flex>
        </Box>
        <Box>
         <Flex justifyContent={'space-between'}>
         <Text>Download App</Text> |<Text>Become Sailer</Text>|
          <Icon as={AiOutlineShoppingCart} />
          <Text>Download App</Text>|<Text>Become Sailer</Text>
         </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
