import React, { useState } from "react";
import { Box, VStack, Heading, Text, Button, Image, Progress, useToast } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";

const lessons = [
  {
    id: 1,
    question: "How do you say 'Hello' in Spanish?",
    options: ["Hola", "Adiós", "Por favor", "Gracias"],
    answer: "Hola",
  },
  {
    id: 2,
    question: "What does 'Gracias' mean in English?",
    options: ["Please", "Goodbye", "Thank you", "Yes"],
    answer: "Thank you",
  },
  // Add more lessons...
];

const Index = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [progress, setProgress] = useState(0);
  const toast = useToast();

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === lessons[currentLesson].answer) {
      toast({
        title: "Correct!",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setProgress((prevProgress) => prevProgress + 100 / lessons.length);
    } else {
      toast({
        title: "Wrong answer. Try again!",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }

    if (currentLesson < lessons.length - 1) {
      setCurrentLesson((prevLesson) => prevLesson + 1);
    } else {
      toast({
        title: "Congratulations! You completed the lesson.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Language Learning App
        </Heading>
        <Image src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nfGVufDB8fHx8MTcxMDM2NzY1OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Language Learning" />
        <Progress value={progress} width="100%" />
        <Box textAlign="center">
          <Heading as="h2" size="lg">
            {lessons[currentLesson].question}
          </Heading>
          <VStack mt={8} spacing={4}>
            {lessons[currentLesson].options.map((option) => (
              <Button key={option} onClick={() => handleAnswer(option)} leftIcon={option === lessons[currentLesson].answer ? <FaCheck /> : <FaTimes />} colorScheme={option === lessons[currentLesson].answer ? "green" : "red"} width="100%">
                {option}
              </Button>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
