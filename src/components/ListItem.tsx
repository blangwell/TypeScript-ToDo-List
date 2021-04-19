import { ToDo } from "../interfaces/toDo.interface";

interface ListItemProps {
  index: number;
  toDo: ToDo;
  updateToDos: (toDoIndex: number) => void;
}

export default function ListItem(props: ListItemProps) {
  const currentDate = new Date();
  let displayDate = currentDate.toUTCString();

  return (
    <span className="list__item">
      <p className="content content--one list__text">
        {displayDate}
      </p>
      <p className="content content--one list__text">
        {props.toDo.name}
      </p>
      <input 
        className="heading heading--one"
        type="checkbox"
        defaultChecked={props.toDo.complete}
        onClick={() => props.updateToDos(props.index)}
      />
    </span>
  )
};