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
      {meals.length > 0 ? (
        meals.map((food) => (
          <>
            <CardItemComponent key={food.idMeal} food={food} />
          </>
        ))
      ) : (
        <p>Kein Essen is da </p>
      )}
    </div>
  );
};
export default MealsPage;
