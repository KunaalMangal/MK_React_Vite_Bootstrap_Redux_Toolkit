import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthStateInterface {
    isLogin: boolean;
    currentUser: object;
    token: string,
    deviceToken: string,
}

const initialAuthState: AuthStateInterface = {
    isLogin: true,
    currentUser: {},
    token: "",
    deviceToken: "",
}


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        onLogin: (state, action: PayloadAction<{ currentUser: Record<string, unknown>, token: string }>) => {
            const { currentUser, token } = action.payload;
            state.currentUser = currentUser;
            state.token = token;
            state.isLogin = true;
        },
    }
});


export const { onLogin } = authSlice.actions;
export default authSlice.reducer;