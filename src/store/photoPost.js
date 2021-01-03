import { PHOTO_POST } from "../api.js";
import createAyncSlice from "./util/createAsyncSlice.js";

const slice = createAyncSlice({
    name: "photoPost",
    fetchConfig: ({ formData, token }) => PHOTO_POST({ formData, token })
});

export const photoPost = slice.asyncAction;

export default slice.reducer;
