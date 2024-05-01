import classes from "./Header.module.css";
import Button from "../Button/Button";

const Header = (props) => {
    return(
        <>
        <div className={classes.header}>
        <h1>Blog Website</h1>
        <Button onClick={props.onShowCart} />
        <hr />
        </div>
        </>
    )
}

export default Header;