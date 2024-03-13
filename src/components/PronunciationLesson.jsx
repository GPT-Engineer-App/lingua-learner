import React from "react";
import { Box, VStack, Heading, Button } from "@chakra-ui/react";

const PronunciationLesson = ({ question, options, onAnswer }) => {
  return (
    <Box>
      <Heading as="h3" size="md" mb={4}>
        {question}
      </Heading>
      <VStack spacing={4}>
        {options.map((option) => (
          <Button key={option} onClick={() => onAnswer(option)} width="100%">
            {option}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default PronunciationLesson;
