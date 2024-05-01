// import './App.css';
import Header from './Components/Header/Header';
import Form from "./Components/Form.js/Form";
import { useState } from 'react';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [todolist, setTodolist] = useState(false);
  const [addList, setAddList] = useState([]);
  const showcartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  const abc = (list) =>{
    setTodolist(true);
    setAddList((prevdata)=>{
      return [...prevdata, list];
    })
    hideCartHandler();
  }
  const deleteItem = (index) =>{
    const updatedUserData = [...addList];
    updatedUserData.splice(index, 1)
    setAddList(updatedUserData);
  }
  const editItem = (index) => {
    deleteItem(index);
    setCartIsShown(true);
  }

  return ( 
    <div className="App">
      {cartIsShown && <Form onClose={hideCartHandler} abc={abc} />}
      <Header onShowCart={showcartHandler} />
        {todolist && <TodoList addList={addList} editItem={editItem} deleteItem={deleteItem} />}
    </div>
  );
}

export default App;
