import React from "react";

const CardItemComponent = ({ food }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={food.strMealThumb} alt={food.strMealThumb} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {food.strMeal}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{food.strCategory}</div>
          <div className="badge badge-outline">{food.strArea}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItemComponent;
