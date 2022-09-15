import React from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
const Loading = () => {
  return (
    <Box
      zIndex={10}
      bg="rgba(0,0,0,0.1)"
      h="100vh"
      w="100vw"
      position="fixed"
      top={0}
      left={0}
    >
      <Flex h="100%" justify="center" align="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    </Box>
  );
};

export default Loading;
