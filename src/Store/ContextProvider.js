import React, { createContext, useState, useContext } from "react";

const ButtonContext = createContext();

export const useButtonContext = () => useContext(ButtonContext);

  const ContextProvider = ({ children }) => {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [blog, setBlog] = useState("");
  const [modal, setModal] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [formObjhandle, setFormObjHandle] = useState([]);
  const [updateBtn, setUpdateBtn] = useState(true);

  const objechHandler = (myData) => {
    setFormObjHandle([...formObjhandle, myData]);
  }
  const handleDelete = (index) => {
    const updateDataHandler = [...formObjhandle];
    updateDataHandler.splice(index, 1);
    setFormObjHandle(updateDataHandler);
  }
  const handleEdit = (user, index) => {
    setUrl(user.url);
    setTitle(user.title);
    setBlog(user.blog);
    const updateDataHandler = [...formObjhandle];
    console.log(updateDataHandler);
    updateDataHandler.splice(index, 1);
    setFormObjHandle(updateDataHandler);
    setUpdateBtn(false);
    setShowItem(false);
    setModal(true);
  }
  const value = {
    url,
    setUrl,
    title,
    setTitle,
    blog,
    setBlog,
    modal,
    setModal,
    showItem,
    setShowItem,
    formObjhandle,
    setFormObjHandle,
    objechHandler,
    handleDelete,
    handleEdit,
    setUpdateBtn,
    updateBtn
  };
  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ContextProvider;
