import { useState, useEffect } from "react";

import CardItemComponent from "../components/CardItemComponent";
import { fetchData } from "../utilities/apiFetch.js";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);

  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(mealsUrl);

        console.log("From API", data.meals);

        setMeals(data.meals);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchMeals();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center dark:text-yellow-500 text-slate-900 pb-4">
        Geheime Rezepte Lager
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {meals.length > 0 ? (
          meals.map((food) => {
            return <CardItemComponent key={food.idMeal} food={food} />;
          })
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};
export default MealsPage;
