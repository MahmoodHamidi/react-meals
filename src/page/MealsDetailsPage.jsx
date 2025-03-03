import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../utilities/apiFetch.js";

const MealsDetailsPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);

  const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  // UseEffect
  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(mealUrl);

        console.log("Meal Details", data.meals[0]);

        setMeal(data.meals[0]);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchMeals();
  }, [id]);

  //
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold mb-3">{meal.strMeal}</h1>
          <p className="py-6 flex flex-col">
            {meal.strInstructions &&
              meal.strInstructions
                .split(".")
                .filter((instruction) => instruction.trim() !== "")
                .map((instruction, index) => {
                  return <span key={index}>- {instruction}</span>;
                })}
          </p>

          <button className="btn btn-primary">
            <Link to="/meals">Back to Meals</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MealsDetailsPage;
