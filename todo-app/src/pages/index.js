import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import InfiniteTodoList from '../components/InfiniteTodoList';
import ThemeSwitch from '../components/ThemeSwitch';

const Home = () => {
  return (
    <Container maxW="6xl" overflow={"hidden"}>
      <Box textAlign="center" fontSize="xl" mb={10} mt={10} display={"flex"} justifyContent={"space-between"}>
        <Text fontSize={"2xl"} fontWeight={600}>Infinite Scrolling Todo List</Text>
        <ThemeSwitch />
      </Box>
      <Box>
        <InfiniteTodoList />
      </Box>
    </Container>
  );
};

export default Home;
