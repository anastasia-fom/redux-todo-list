import { createSlice } from "@reduxjs/toolkit";

const initialData = {
    items: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialData,
    reducers: {
        addItem: (state, action) => {
            const item = {
                id: Math.floor(Math.random() * 10000),
                time: new Date().getTime(),
                text: action.payload,
                isDone: false
            };
            state.items.push(item);
        },
        deleteItem: (state, action) => {
            const findElement = state.items.findIndex((element) => element.id === action.payload.id);
            state.items.splice(findElement, 1);
        },
        doneItem: (state, action) => {
            const findElement = state.items.findIndex((element) => element.id === action.payload.id);
            state.items[findElement].isDone = !state.items[findElement].isDone;
        }
    },
});

export const { addItem, deleteItem, doneItem } =
    todoSlice.actions;

export default todoSlice.reducer;
