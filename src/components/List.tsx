import ListItem from "./ListItem";
import { ToDo } from "../interfaces/toDo.interface";

interface ListProps {
  toDos: ToDo[];
  toggleModal: () => void;
  updateToDos: (toDoIndex: number) => void;
}

export default function List(props: ListProps) {
  const listItems = props.toDos.map((toDo, idx) => {
    return <ListItem 
      key={idx}
      index={idx}
      toDo={toDo}
      updateToDos={props.updateToDos}
    />
  })
  return (
    <div className="list">
      <div className="list__header"></div>
      <div className="list__body">
        { listItems ?? "No items on your list."}
      </div>
      <p className="heading heading--two list__header__add" onClick={props.toggleModal}>ADD</p>
    </div>
  )
};