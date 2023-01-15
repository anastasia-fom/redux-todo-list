import {deleteItem, doneItem} from "../../features/todoSlice";
import {useDispatch} from "react-redux";
import deleteIcon from "./../../assets/icons/delete.svg";
import doneIcon from "./../../assets/icons/done.svg";
const Item = ({id, text, complete}) => {

    const dispatch = useDispatch();

    return (
        <li className={complete ? 'checked' : ''}>
            <p>
                {text.item}
            </p>
            <div>
                <button onClick={() => dispatch(doneItem({id}))}>
                    <img
                        src={doneIcon}
                        alt={"Done icon button"}
                    />
                </button>
                <button onClick={() => dispatch(deleteItem({id}))}>
                    <img
                        src={deleteIcon}
                        alt={"Delete icon button"}
                    />
                </button>
            </div>

        </li>
    )
}

export default Item;