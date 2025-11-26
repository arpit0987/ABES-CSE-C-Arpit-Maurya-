import './Card.css'

function Card(props) {
  return (
    <div id="card1">
      <h2>Student Details</h2>
      <h4>ID: {props.id}</h4>
      <h4>Name: {props.name}</h4>
      <h4>Class: {props.studentClass}</h4>
    </div>
  );
}

export default Card;