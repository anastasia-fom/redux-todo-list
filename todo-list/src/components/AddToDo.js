import { addItem } from "../features/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddToDo = () => {
    const [inputValue, setInputValue] = useState();

    const dispatch = useDispatch();

    return(
        <div className="todo-list__add">
            <input placeholder={"Enter task"}
                   type={"text"}
                   value={inputValue}
                   onChange={(event) => setInputValue(event.target.value)}/>
            <button onClick={ () => {
                setInputValue("")
                dispatch(addItem({item: inputValue}))}}
                    disabled={String(inputValue).trim().length === 0}
            >
                +
            </button>
        </div>
    )
}

export default AddToDo;