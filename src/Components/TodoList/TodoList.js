import React from "react";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
    return(
        <React.Fragment>
            {
                props.addList.map((event, index) => {
                    return <div className={classes.list} key={index}>
                        <p>{event.id}</p>
                        <p><strong>Image URL: </strong> 
                        {/* {event.url} */}
                        </p>
                        <img src={event.url} alt="image"/>
                        <p><strong>Title :</strong> {event.title}</p>
                        <p><strong>Description :</strong> {event.description}</p>
                        <button className={classes.edit} onClick={() => props.editItem(index)}>edit</button>
                        <button className={classes.delete} onClick={() =>props.deleteItem(index)}>delete</button>
                    </div>
                })
            }
        </React.Fragment>
    )
}

export default TodoList;