import { useButtonContext } from "../../Store/ContextProvider";
import classes from "./Form.module.css";
import { createPortal } from "react-dom";


const overLay = document.getElementById("overLay");

const Form = () => {
    const {
        url,
        setUrl,
        title,
        setTitle,
        blog,
        setBlog,
        setModal,
        setShowItem,
        objechHandler,
        updateBtn 
    } = useButtonContext();

    const urlHandler = (event) => {
        setUrl(event.target.value);
    }
    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const blogHandler = (event) => {
        setBlog(event.target.value);
    }
    const formObj = {
        url,
        title,
        blog
    }
    const saubmitHandler = (event) => {
        event.preventDefault();
        setShowItem(true);
        setModal(false);
        objechHandler(formObj);
        setUrl("");
        setTitle("");
        setBlog("");
    }

    const closeForm = () => {
        setModal(false);
        setShowItem(true);
        setUrl("");
        setTitle("");
        setBlog("");
    }
    return createPortal(
        <>
            <div className={classes.backdrop} onClick={closeForm}></div>
            <div className={classes.modelOverlay}>
                <form onSubmit={saubmitHandler}>
                    <div className={classes.coverAllLabelInput}>
                        <div className={classes.coverLaveInput}>
                            <label>Image Url:</label><br />
                            <input type="url" value={url} onChange={urlHandler} required />
                        </div>
                        <div className={classes.coverLaveInput}>
                            <label>Title:</label><br />
                            <input type="text" value={title} onChange={titleHandler} required />
                        </div>
                        <div className={classes.coverLaveInput}>
                            <label>Blog Description:</label><br />
                            <input type="text" value={blog} onChange={blogHandler} required />
                        </div>
                    </div>
                    <div className={classes.btns}>
                        <button className={classes.postBlog} type="submit">{updateBtn ? "Post Blog" : "Update Button"}</button>
                        <button className={classes.close} onClick={closeForm}>Close</button>
                    </div>
                </form>
            </div>
        </>,
        overLay
    )
}

export default Form;