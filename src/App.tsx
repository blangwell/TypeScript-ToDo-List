import { useState } from 'react';
import { Footer, Header } from "./layout";
import { mockData } from "./data/mockData";
import { ToDo } from "./interfaces/toDo.interface";
import List from "./components/List";
import Modal from "./components/Modal";
import "./App.css";

export default function App() {
  const [toDos, setToDos] = useState<ToDo[]>(mockData);
  const [modalOpen, setModalOpen] = useState(false);

  const addNewToDo = (newToDo: ToDo) => {
    setToDos(toDos => [...toDos, newToDo]);
  }

  const toggleModal = () => {
    return modalOpen ? setModalOpen(false) : setModalOpen(true);
  }

  const updateToDos = (toDoIndex: number) => {
    let tempToDos = [...toDos];
    tempToDos[toDoIndex].complete = !tempToDos[toDoIndex].complete;
    // setToDos(newToDos);
  }

  let modalClassName = modalOpen ? "modal modal--active" : "modal";

  return (
    <div className="app">
      <p className="heading heading--one">Hello, TypeScript</p>
      <Header />
      <div className="container">
        <List 
          toDos={toDos} 
          toggleModal={toggleModal}
          updateToDos={updateToDos}
        />
        <Modal 
          className={modalClassName}
          addNewToDo={addNewToDo} 
          toggleModal={toggleModal}
        />
      </div>
      <Footer />
    </div>
  )
};