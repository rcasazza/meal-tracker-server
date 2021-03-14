import { deleteIngredient, getIngredients } from "../db";

export const deleteIngredientRoute = {
    method: 'delete',
    path: '/ingredient/:name',
    handler: async (req, res) => {
        const {name} = req.params;
        console.log(name);
        await deleteIngredient(name);
        const updatedIngredients = await getIngredients();
        res.status(200).json(updatedIngredients);
    },
};