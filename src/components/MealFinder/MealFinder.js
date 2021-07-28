import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);
    const handleChange = event =>{
        // console.log(event.target.value)
        setSearch(event.target.value)
    }
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])
    return (
        <div>
            <h1>This is Meal Finder</h1>
            <input onChange={handleChange} type="search" placeholder="Search food" />
            <h2>Search text: {search}</h2>
            <h2>Meal found: {meals?.length || 0}</h2>
            <ul>
                {
                    meals?.map(meal => <li>{meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default MealFinder;