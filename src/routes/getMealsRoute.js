import { getMeals } from '../db';

export const getMealsRoute = {
    method: 'get',
    path: '/meals',
    handler: async (req, res) => {
//        console.log("Getting meals");
        const meals = await getMeals();
        res.status(200).json(meals);
    },
};