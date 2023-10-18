import React, { useState } from 'react';
import { Button, Input, Stack, Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(updateTodo(todo.id, editedText, todo.completed));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <Box w={"lg"} mb={2} p={12} borderWidth="1px" borderRadius="md">
      <Flex>
        {isEditing ? (
          <Input
          
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <Text fontSize="lg" fontWeight={"600"}>{todo.text}</Text>
        )}
        <Spacer />
        <Stack direction="row" spacing={2}>
          <Button
            colorScheme={isEditing ? 'teal' : 'blue'}
            onClick={handleEdit}
          >
            {isEditing ? 'Save' : 'Edit'}
          </Button>
          <Button colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default TodoItem;
