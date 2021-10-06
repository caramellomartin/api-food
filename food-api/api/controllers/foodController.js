const { response } = require('express');
const { foodService } = require('../services');

const foodController = {
    getAll: (req, res) => {
        res.json(foodService.getAll())
    },
    getOne: (req, res) => {
        try {
            res.status(200).json(foodService.getOne(+req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'La comida que esta buscando no existe.' });
        }
    },
    create: (req, res) => {
        try {
            const newFood = req.body;
            /* if (foodService.exists(newFood.id, newFood.name)) {
                res.status(400).json({ error: 'La comida ya existe.'});
                return;
            } */
            const food = foodService.create(newFood);
            res.status(200).json(food);
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }    
    },
};

module.exports = foodController;