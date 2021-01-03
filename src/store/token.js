import { TOKEN_POST } from "../api.js";
import createAsyncSlice from "./util/createAsyncSlice.js";

const slice = createAsyncSlice({
    name: "token",
    fetchConfig: (user) => TOKEN_POST(user)
});

export const fetchToken = slice.asyncAction;
export default slice.reducer;
