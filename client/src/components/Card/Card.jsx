import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  // const { recipes } = props;

  return (
    <div className="recipe-card">
      <Link className="card-link" to={`/recipes/${props.id}`}>
        <img
          className="card-img"
          src={props.img_url}
          alt={props.name}
        />
        <div className="card-name-container">
          <p className="card-name">{props.name}</p>
        </div>
      </Link>
    </div>
  )
}
