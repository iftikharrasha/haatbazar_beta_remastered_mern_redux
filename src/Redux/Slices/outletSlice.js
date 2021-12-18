import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchOutlets = createAsyncThunk(
    'outlet/fetchOutlets',
    async () => {
      const response = await fetch('https://rocky-retreat-69417.herokuapp.com/outlets')
      .then(res => res.json())
      return response
    }
)

export const postReacts = createAsyncThunk(
    'outlet/postReacts',
    async (outlet) => {
        let url = `https://rocky-retreat-69417.herokuapp.com/reaction/${outlet._id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(outlet)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                return outlet
            }else{
                console.log('No response!');
            }
        })
        .catch((error) => {
            console.log(error);
        })
        return response
    }
)

export const postViews = createAsyncThunk(
    'outlet/postViews',
    async (outlet) => {
        let url = `https://rocky-retreat-69417.herokuapp.com/view/${outlet._id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(outlet)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                return outlet
            }else{
                console.log('No response!');
            }
        })
        .catch((error) => {
            console.log(error);
        })
        return response
    }
)

const outletSlice = createSlice({
    name: 'outlet',
    initialState: {
        outletsList: [],
        wishList: [],
        status: 'idle',
    },
    reducers: {
        addTo: (state, action) => {
            state.wishList.push(action.payload); 
        },
        removeFrom: (state, action) => {
            state.wishList = state.wishList.filter(outlet => outlet.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchOutlets.fulfilled, (state, action) => {
          state.outletsList = action.payload;
          state.status = 'success';
        })

        builder.addCase(postReacts.fulfilled, (state, action) => {
            state.outletsList = state.outletsList.map(outlet => outlet._id === action.payload._id ? {...outlet, react: outlet.react + 1 } : outlet);
            state.status = 'success';
        })

        builder.addCase(postViews.fulfilled, (state, action) => {
            state.outletsList = state.outletsList.map(outlet => outlet._id === action.payload._id ? {...outlet, views: outlet.views + 1 } : outlet);
            state.status = 'success';
        })

        // builder.addCase(fetchOutlets.pending, (state, action) => {
        //     // Add user to the state array
        //     state.status = 'pending';
        // })

        // builder.addCase(fetchOutlets.rejected, (state, action) => {
        //     // Add user to the state array
        //     state.status = 'error';
        // })
    },
});

// Action creators are generated for each case reducer function
export const { addTo, removeFrom } = outletSlice.actions;
export default outletSlice.reducer;