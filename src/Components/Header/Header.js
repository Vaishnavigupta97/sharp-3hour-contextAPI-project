import { useButtonContext } from "../../Store/ContextProvider";
import Form from "../Form/Form";
import classes from "./Header.module.css";

const Header = () => {
    const { modal, setModal, setUpdateBtn } = useButtonContext()
    const blogBtnClick = () => {
        setModal(true);
        setUpdateBtn(true);
    };
    return (
        <>
            <div className={classes.Header}>
                <h1>Blog website</h1>
                <button onClick={blogBtnClick}>Add New Blog</button>
                <hr />
                {modal && <Form />}
            </div>
        </>
    )
}

export default Header;