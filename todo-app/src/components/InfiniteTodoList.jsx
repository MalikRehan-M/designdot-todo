import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, fetchMoreTodos } from "../redux/actions";
import TodoItem from "./TodoItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, Input, Center, CircularProgress, Grid } from "@chakra-ui/react";

const InfiniteTodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const fetchMoreData = () => {
    if (hasMore) {
      dispatch(fetchMoreTodos(page + 1)).then((newTodos) => {
        if (newTodos.length === 0) {
          setHasMore(false);
        }
        setPage(page + 1);
      });
    }
  };
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Input
        type="text"
        placeholder="Search Todos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
      />
      <InfiniteScroll
        dataLength={filteredTodos.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <Center mt={4}>
            <CircularProgress isIndeterminate color="green.300" />
          </Center>
        }
        scrollThreshold={0.9} 
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default InfiniteTodoList;
