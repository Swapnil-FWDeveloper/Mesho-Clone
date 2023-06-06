import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Flex justifyContent={"space-evenly"}>
        <Box>
          <Text fontSize={"25px"} mr={"27px"}>
            Shop Non-Stop on Meesho
          </Text>
          <Box w={"300px"} ml={"20px"} mt={"10px"}>
            <Text fontSize="x" textColor={"gray"} textAlign={"start"}>
              Trusted by more than 1 Crore Indians Cash on Delivery | Free
              Delivery
            </Text>
          </Box>
          <Box marginTop={"20px"} w={"350px"} ml={"20px"}>
            <Flex
              gap={"10px"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Image
                src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp"
                alt="google play games"
                style={{
                  height: "40px",
                  w: "10",
                }}
              />
              <Image
                src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp"
                alt="app store"
                style={{
                  height: "40px",
                  w: "10",
                }}
              />
            </Flex>
          </Box>
        </Box>
        <Box textAlign={"start"} fontWeight={"20px"}>
          <Text fontSize="20px" textColor={"gray"}>
            Careers
          </Text>
          <Text fontSize="20px" textColor={"gray"}>
            Become a supplier
          </Text>
          <Text fontSize="xl" textColor={"gray"}>
            Hall of Fame
          </Text>
        </Box>
        <Box textAlign={"start"}>
          <Text fontSize="xl" textColor={"gray"}>
            Legal and Policies
          </Text>
          <Text fontSize="20px" textColor={"gray"}>
            Meesho Tech Blog
          </Text>
          <Text fontSize="20px" textColor={"gray"}>
            Notice and Returns
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" textColor={"black"}>
            Reach out to us
          </Text>
          <Box w={"150px"} mt={"10px"}>
            <Flex justifyContent={"space-evenly"}>
              <Image
                src="https://images.meesho.com/images/pow/facebook.png"
                alt="facebook"
              />
              <Image
                src="https://images.meesho.com/images/pow/instagram.png"
                alt="insagram"
              />
              <Image
                src="https://images.meesho.com/images/pow/youtube.png"
                alt="youtube"
              />
              <Image
                src="https://images.meesho.com/images/pow/linkedin.png"
                alt="linkdid"
              />
              <Image
                src="https://images.meesho.com/images/pow/twitter.png"
                alt="linkdid"
              />
            </Flex>
          </Box>
        </Box>
        <Box textAlign={"start"}>
          <Text fontSize="xl" color={"black"}>
            Careers
          </Text>
          <Box  w={"180px"} textAlign={"start"}>
            <Text fontSize="12px">
              Fashnear Technologies Private Limited,<br/>
               CIN: U74900KA2015PTC082263
              06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer
              Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka,
              India <br/> E-mail address: query@meesho.com<br/> © 2015-2022 Meesho.com
            </Text>
          </Box>
        </Box>
       
      </Flex>
    </Box>
  );
};

export default Footer;
