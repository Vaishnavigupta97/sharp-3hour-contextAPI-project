import { useButtonContext } from "../../Store/ContextProvider";
import classes from "./TodoList.module.css";


const ShowItem = () => {
    const { formObjhandle, handleDelete, handleEdit } = useButtonContext();
    return (
        <>
            <p className={classes.todoList}>TodoList</p>
            {formObjhandle.map((user, index) => (
                <div key={index} className={classes.list}>
                    <p className={classes.title}><strong>{user.title}</strong></p>
                    <img className={classes.imgs} src={user.url} alt="here is a img" />
                    <p className={classes.blog}>{user.blog}</p>
                    <div className={classes.button}>
                        <button className={classes.edit} onClick={() => handleEdit(user, index)}>Edit</button>
                        <button className={classes.delete} onClick={() => handleDelete(index)}>delete</button>
                    </div>
                </div>
            ))}
        </>

    )
}

export default ShowItem;