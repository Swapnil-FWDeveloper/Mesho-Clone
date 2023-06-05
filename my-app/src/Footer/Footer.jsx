import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Flex>
        <Box >
          <Heading margin={"auto"}>Shop Non-Stop on Meesho</Heading>
          <Box border={"2px solid red"} w={"25%"}>
            <Text fontSize="xl" textColor={"gray"}>
              Trusted by more than 1 Crore Indians Cash on Delivery | Free
              Delivery
            </Text>
          </Box>
          <Flex gap={"10px"} justifyContent={"center"}>
            <Image
              src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp"
              alt="google play games"
              style={{ height: "70px" }}
            />
            <Image
              src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp"
              alt="app store"
              style={{ height: "70px" }}
            />
          </Flex>
        </Box>
        <Box>
          <Text fontSize="xl" textColor={"gray"}>
            Careers
          </Text>
          <Text fontSize="xl" textColor={"gray"}>
            Become a supplier
          </Text>
          <Text fontSize="xl" textColor={"gray"}>
            Hall of Fame
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" textColor={"gray"}>
            Careers
          </Text>
          <Text fontSize="xl" textColor={"gray"}>
            Become a supplier
          </Text>
          <Text fontSize="xl" textColor={"gray"}>
            Hall of Fame
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" textColor={"gray"}>
            Reach out to us
          </Text>
          <Image
            src="https://images.meesho.com/images/pow/facebook.png"
            alt="facebook"
          />
          <Image src="https://images.meesho.com/images/pow/instagram.png" alt="insagram" />
          <Image src="https://images.meesho.com/images/pow/youtube.png" alt="youtube" />
          <Image src="https://images.meesho.com/images/pow/linkedin.png" alt="linkdid" />
          <Image src="https://images.meesho.com/images/pow/twitter.png" alt="linkdid" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
