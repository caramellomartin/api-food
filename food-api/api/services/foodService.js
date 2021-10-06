const db = require('../data/food.json');
const { Food } = require('../models');

const foodService = {
    getAll: () => {
        return db.map((food) => new Food (food.id, food.name, food.color, food.icon))
    },
    getOne: (id) => {
        
        const food = db.find((food) => food.id === id) 
        if (food){
            return new Food (food.id, food.name, food.color, food.icon)
        } else{
            throw new Error ("Comida no encontrada.")
        }
        
    },
    create: (newFood) => {
        db.push(new Food(
            newFood.id,
            newFood.name,
            newFood.color,
            newFood.icon,
        ));
        return db;
    },
};

module.exports = foodService;