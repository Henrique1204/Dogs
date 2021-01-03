import { TOKEN_POST } from "../api.js";
import createAsyncSlice from "./util/createAsyncSlice.js";

const slice = createAsyncSlice({
    name: "token",
    initialState: {
        dados: {
            token: window.localStorage.getItem("token") || null
        }
    },
    fetchConfig: (user) => TOKEN_POST(user)
});

export const fetchToken = slice.asyncAction;
export const { resetState: resetTokenState } = slice.actions;
export default slice.reducer;
