import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MealDetail = () => {
    const [meal, setMeal] = useState({});
    useEffect(()=>{
        const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    }, [])
    return (
        <div>
            <h1>This is Meal Detail</h1>
            <h1>Name: {meal.strMeal}</h1>
        </div>
    );
};

export default MealDetail;