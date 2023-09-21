import { createSlice, nanoid } from "@reduxjs/toolkit";


const intialState = {
    todos: [{ id: 1, text: "Learn Redux" }]
};

export const todosSlice = createSlice({
    name: "todos",
    initialState: intialState,
    reducers: {
        addTodo: (state, action) => {
            const todos = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todos);
        }
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
        state.todos = state.todos.map(todoPrev => {
            todoPrev.id == nanoid ? action.payload : todoPrev
        })
    }
});

export const { addTodo, removeTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;