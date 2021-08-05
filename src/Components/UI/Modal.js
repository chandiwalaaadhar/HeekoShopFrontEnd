import classes from "./Modal.module.scss";
import ReactDom from "react-dom";

const Modal = (props) => {
  return ReactDom.createPortal(
    <div
      className={`${props.className} ${classes.container}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>,
    document.getElementById("overlay")
  );
};

export default Modal;
