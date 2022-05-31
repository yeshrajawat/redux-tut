import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = {
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
}

const productSlice = new createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.IDLE,

    },
    // reducers:{
        
    //     setProducts(state,action){
    //         state.data = action.payload;
    //     },

    //     setStatus(state,action) {
    //         state.status = action.payload
    //     }
    // },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchProducts.pending, (state,action) => {
                state.status = STATUS.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state,action)=> {
            state.data = action.payload;
            state.status = STATUS.IDLE;
        })
        .addCase(fetchProducts.rejected, (state,action) => {
            state.status = STATUS.ERROR;
        })
    }

})

export const {setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;

//THUNKS
export const fetchProducts = createAsyncThunk('products/fetch', async ()=> {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch,getState){
            
//             dispatch(setStatus(STATUS.LOADING));
        
//         try {
//                 const res = await fetch('https://fakestoreapi.com/products');
//                 const data = await res.json();

//                 dispatch(setProducts(data));
//                 dispatch(setStatus(STATUS.IDLE))

//             } catch (error) {
//                 console.log(error);
//                 dispatch(setStatus(STATUS.ERROR));
//             }
//     }
// }
