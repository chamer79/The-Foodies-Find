import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  // const { recipes } = props;

  return (
    <div className="recipe-card">
      <Link className="card" to={`/recipes/${props.id}`}>
        <img
          className="recipe-card-img"
          src={props.img_url}
          alt={props.name}
        />
        <div className="card-name-container">
          <p className="recipe-card-name">{props.name}</p>
        </div>
      </Link>
    </div>
  )
}
