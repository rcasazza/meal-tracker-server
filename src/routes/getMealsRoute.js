import { getPopulatedMeals } from '../db';

export const getMealsRoute = {
    method: 'get',
    path: '/meals',
    handler: async (req, res) => {
//        console.log("Getting meals");
        const meals = await getPopulatedMeals();
        res.status(200).json(meals);
    },
};