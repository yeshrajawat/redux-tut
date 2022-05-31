const { createSlice } = require("@reduxjs/toolkit");



const cartSlice = createSlice({
    name:'cart',

    initialState : [],

    reducers:{

        add(state,action){

            //State here is the initial state
            // and we are adding the value to it
            state.push(action.payload)


        },
        remove(state, action){

            return state.filter((item) => item.id !== action.payload)
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;