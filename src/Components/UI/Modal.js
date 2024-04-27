import React from "react";
import ReactDOM from "react-dom";
const ModalOverLay = (props) => {
    return(
        <div>{props.children}</div>
    )
}
const portalElement = document.getElementById("overLays");

const Modal =(props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalOverLay>{props.children}</ModalOverLay>
            )}
        </React.Fragment>
    )
}

export default Modal;