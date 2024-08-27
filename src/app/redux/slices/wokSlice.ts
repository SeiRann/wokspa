import { createSlice } from "@reduxjs/toolkit"

type initialStateType = {
    noodles:string,
    ingredients:string[]
}

const initialState:initialStateType = {
    noodles:"",
    ingredients:[]
};

const wokSlice = createSlice({
    name: 'wokIngredients',
    initialState,
    reducers:{
        noodlesChanged(state, action){
            const {noodlesSelected} = action.payload
            
            state.noodles = noodlesSelected
        },
        ingredientAdded(state, action){
            const {addedIngredient}:{addedIngredient:string} = action.payload

            state.ingredients.push(addedIngredient)
        },
        ingredientRemoved(state, action){
            const {removedIngredient}:{removedIngredient:string} = action.payload
            const updatedIngredients = state.ingredients.filter(ingredient => ingredient!=removedIngredient)
            
            state.ingredients = updatedIngredients
        }
    }
})

export const { noodlesChanged, ingredientAdded, ingredientRemoved } = wokSlice.actions

export default wokSlice.reducer