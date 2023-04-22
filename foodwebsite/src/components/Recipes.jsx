import React, { useEffect, useState } from 'react'

function Recipes(searchedValue) {

    const [food, setFood] = useState([]);
    const [input, setInput] = useState('');

    let api = '';
    let searchItem = input;

    input === '' ? (api = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian') : (api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)

    console.log(api);

    const fetchData = async () => {
        const response = await fetch(api)
        const actualData = await response.json();
        setFood(actualData.meals);

    }

    useEffect(() => {
        fetchData(api);
    }, [input])


    const handelChange = (event) => {
        const userInputValue = event.target.value;
        console.log(userInputValue);
        setInput(userInputValue);
    }

    return (
        <>
            <div className='input-div'>

                <input onChange={handelChange} type="text" placeholder='Search' value={input} />
        </div >

            <div className='all-cards'>
                {food.map((item, index) => {
                    return (
                        <div className='card '>
                            <img className='recipe-img' src={item.strMealThumb} alt="food-pic" />
                            <h4 className='title'>{item.strMeal}</h4>
                            <h4 className='area'>Indian</h4>
                        </div>
                    )
                })}
            </div>


        </>
    )
}

export default Recipes
