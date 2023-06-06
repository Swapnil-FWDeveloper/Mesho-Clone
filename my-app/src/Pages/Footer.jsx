import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Flex justifyContent={"space-evenly"}>
        <Box>
          <Text fontSize={'25px'} mr={"27px"} >
            Shop Non-Stop on Meesho
          </Text>
          <Box  w={"300px"} ml={"20px"} mt={"10px"}>
            <Text fontSize="x" textColor={"gray"} textAlign={"start"}>
              Trusted by more than 1 Crore Indians Cash on Delivery | Free
              Delivery
            </Text>
          </Box>
          <Box  marginTop={"20px"} w={"350px"} ml={"20px"}>
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
        <Box textAlign={"start"} >
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
        </Box>
        <Box>
          {/* <Text>
            Fashnear Technologies Private Limited, CIN: U74900KA2015PTC082263
            06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring
            Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
            E-mail address: query@meesho.com © 2015-2022 Meesho.com
          </Text> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
