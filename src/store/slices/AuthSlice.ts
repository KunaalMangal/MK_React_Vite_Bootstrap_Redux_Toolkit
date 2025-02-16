import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthStateInterface {
    isLogin: boolean;
    currentUser: object;
    token: string,
    deviceToken: string,
}

const initialAuthState: AuthStateInterface = {
    isLogin: false,
    currentUser: {},
    token: "",
    deviceToken: "",
}


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        onLogin: (state, action: PayloadAction<AuthStateInterface>) => {
            const { currentUser, token, isLogin } = action.payload;
            state.currentUser = currentUser;
            state.token = token;
            state.isLogin = isLogin;
        },
    }
});


export const { onLogin } = authSlice.actions;
export default authSlice.reducer;