import { Link } from "react-router-dom";

//
const CardItemComponent = ({ food }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <Link to={`/meals/${food.idMeal}`}>
        <figure>
          <img src={food.strMealThumb} alt={food.strMeal} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food.strMeal}</h2>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{food.strCategory}</div>
            <div className="badge badge-outline">{food.strArea}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CardItemComponent;
