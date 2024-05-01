import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Form.module.css";



const Form = (props) => {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const urlChangeHandler = (event) =>{
        setUrl(event.target.value);
    }
    const titleChangeHandler = (event) => {
        setTitle(event.target.value); 
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const formObj = {
            // id: Math.random().toString(),
            url : url,
            title : title,
            description : description
        }
        props.abc(formObj);
    }
    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={submitHandler}>
                <div className={classes.formInputLabel}>
                    <div>
                        <label>Image Url:</label><br />
                        <input type="url" value={url} onChange={urlChangeHandler} />
                        {/* <img src={"url"} alt="image" /> */}
                    </div>
                    <div>
                        <label>Title :</label><br />
                        <input type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div>
                        <label>Blog descrption</label><br />
                        <input type="text" value={description} onChange={descriptionChangeHandler} />
                    </div>
                </div>
                <button className={classes.postBtn} type="submit">post blog</button>
                <button className={classes.closeBtn} onClick={props.onClose}>close</button>
            </form>
        </Modal> 
    )
}

export default Form;