import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Header from '../Header/Header';
import './Menu.css'

const Menu = () => {
    const [foods, setFoods] = useState([])
    const [order, setOrder] = useState([])
    // const [searchFoods, setSearchFoods] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals)
                // setSearchFoods(data.meals)
            })
    }, [])
    // const searchFood = (event) => {
    //     const searchText = event.target.value
    //     console.log(searchText);
    //     const matchedProducts = foods.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
    //     setSearchFoods(matchedProducts)
    // }
    const orderFood = food => {
        if (![...order].includes(food.strMeal)) {
            const newList = [...order, food.strMeal]
            setOrder(newList);
        }
    }
    return (
        <div>
            {/* <Header searchFood={searchFood} /> */}
            <Header />

            <div className="container row mx-auto mt-5">
                {/* <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mt-1"> */}
                <div className="row g-4 mt-1 col-9 col-md-10 col-lg-11">
                    {
                        foods.map(food => {
                            return (
                                <Food key={food.idMeal} food={food} orderFood={orderFood} />
                            )
                        })
                    }
                </div>
                <div className=" sidenav col-4 col-md-3 col-lg-2 bg-light text-secondary  border border-light shadow-sm order-item">
                    <h5 className=" text-center mb-2 pb-2 border-bottom border-2 border-secondary">Ordered Items</h5>
                    {
                        order.map(item => {
                            // let quantity = 1
                            // if (order.indexOf(item) !== -1) {
                            //     quantity += 1
                            // }
                            return (
                                <p className="bg-secondary text-white fw-bold border rounded p-1 mb-1 text-center">{item}</p>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Menu;