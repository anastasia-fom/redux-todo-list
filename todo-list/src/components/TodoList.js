import {useSelector} from "react-redux";
import Item from "./elements/Item";

const TodoList = () => {
    const todos = useSelector((state) => {
        return state.todo;
    })

    return (
        <ul>
            {todos.items.map((element, index ) => {
                return (
                    <Item
                        key={index}
                        id={element.id}
                        text={element.text}
                        complete={element.isDone}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList;