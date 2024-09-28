import { useEffect, useState } from "react";
import {
  Box,
  Image,
  Stack,
  HStack,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import card1 from "../../assets/cardImages/card1.png";

const SliderContainer = () => {
  const slides = [1, 2, 3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box
      className="hero__slider"
      overflow="hidden"
      position="relative"
      rounded={"md"}
      bg={"#7367f0"}
    >
      <Stack
        direction="row"
        className="hero__slides"
        width="300%"
        color={"white"}
        transition="2s ease"
        transform={`translateX(-${(currentSlide * 100) / slides.length}%)`}
      >
        {slides.map((slide, index) => (
          <Box key={slide.id} className="hero__slide" width="100%">
            <Grid
              rounded="md"
              color={"white"}
              p={8}
              templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
            >
              <GridItem>
                <Text fontSize={"xl"}>Website Analytics</Text>
                <Text>Total 28.5% Conversion Rate</Text>
                <Text my={3}>Spending</Text>
                <Flex gap={6}>
                  {" "}
                  <Box display={"flex"} alignItems={"center"} gap={4}>
                    <Text bg={"#6f6b7d"} p={2} rounded={"lg"}>
                      {" "}
                      28%
                    </Text>
                    <Text>Spend</Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={4}>
                    <Text bg={"#6f6b7d"} p={2} rounded={"lg"}>
                      {" "}
                      28%
                    </Text>
                    <Text>Spend</Text>
                  </Box>
                </Flex>
                <Flex gap={6} mt={2}>
                  {" "}
                  <Box display={"flex"} alignItems={"center"} gap={4}>
                    <Text bg={"#6f6b7d"} p={2} rounded={"lg"}>
                      {" "}
                      28%
                    </Text>
                    <Text>Spend</Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={4}>
                    <Text bg={"#6f6b7d"} p={2} rounded={"lg"}>
                      {" "}
                      28%
                    </Text>
                    <Text>Spend</Text>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem hideBelow={"md"}>
                <Image src={card1} alt="card1" w={"180px"} h={"180px"}></Image>
              </GridItem>
            </Grid>
          </Box>
        ))}
      </Stack>

      <HStack
        className="hero__btns"
        position="absolute"
        top="15px"
        right={"10px"}
        justifyContent="center"
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            className="btn__auto"
            padding="4px"
            borderRadius="50%"
            transition="1s"
            bg={currentSlide === index ? "#ffffff" : "#d2d0e3"}
            onClick={() => setCurrentSlide(index)}
            cursor="pointer"
          />
        ))}
      </HStack>
    </Box>
  );
};

export default SliderContainer;
