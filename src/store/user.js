import { USER_GET } from "../api.js";
import { fetchToken, resetTokenState } from "./token.js";
import createAsyncSlice from "./util/createAsyncSlice.js";

const slice = createAsyncSlice({
    name: "user",
    fetchConfig: (token) => USER_GET(token)
});

const { resetState: resetUseState, fetchFail } = slice.actions;

export const fetchUser = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
    const { payload } = await dispatch(fetchToken(user));

    if (payload.token) {
        window.localStorage.setItem("token", payload.token);
        await dispatch(fetchUser(payload.token));
    }
};

export const userLogout = () => async (dispatch) => {
    window.localStorage.removeItem("token");

    dispatch(resetTokenState());
    dispatch(resetUseState());
};

export const autoLogin = () => async (dispatch, getState) => {
    const { token } = getState();

    if (token?.dados?.token) {
        const { type } = await dispatch(fetchUser(token.dados.token));

        if (type === fetchFail.type) dispatch(userLogout());
    }
};

export default slice.reducer;
