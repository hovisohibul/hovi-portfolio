import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IName {
    name: string | null
}

const initialState: IName = {
    name: null
}

const nameSlice = createSlice({
    name: 'nameSlice',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<IName>) => {
            state.name = action.payload.name
        }
    }
})

export const { setName } = nameSlice.actions

export default nameSlice.reducer