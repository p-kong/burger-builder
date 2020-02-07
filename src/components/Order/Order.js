import React from 'react';
import classes from './Order.css';

const Order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  console.log(ingredients);

  let ingredientOutput = ingredients.map(ig => {
    return `${ig.name} (${ig.amount}) `;
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput} </p>
      <p>Price: ${Number.parseFloat(props.price).toFixed(2)}</p>
    </div>
  );
};

export default Order;
