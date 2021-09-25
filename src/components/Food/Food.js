import React from 'react';

const Food = (props) => {
    const { strMeal, strArea, strCategory, strMealThumb } = props.food
    return (
        // <div className="col">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p><span className="text-secondary fw-bold">Category: </span>{strCategory}</p>
                    <p><span className="text-secondary fw-bold">Area: </span>{strArea}</p>
                </div>
                <div className="p-3 text-center">
                    <button className="btn btn-outline-success" onClick={() => props.orderFood(props.food)}>Order Item</button>
                </div>
            </div>
        </div>
    );
};

export default Food;