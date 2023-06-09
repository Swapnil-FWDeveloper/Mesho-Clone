import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart, IconName } from "react-icons/ai";
const Navbar = () => {
  return (
    <Box>
      <Flex>
        <Box>
          <Text>meesho</Text>
          <Input placeholder="search your favroutes items" w={"20rem"} />
        </Box>
        <Box>
          <Text>Download App</Text> |<Text>Become Sailer</Text>|
          <Icon as={AiOutlineShoppingCart} />
          <Text>Download App</Text>|<Text>Become Sailer</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
