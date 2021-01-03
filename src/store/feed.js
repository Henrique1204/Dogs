import createAsyncSlice from "./util/createAsyncSlice.js";
import { PHOTOS_GET } from "../api.js";

const slice = createAsyncSlice({
    name: "feed",
    initialState: {
        lista: [],
        page: 1,
        infinite: true
    },
    reducers: {
        addPhotos(state, action) {
            state.lista.push(...action.payload);

            if (action.payload.length === 0) state.infinite = false;
        },
        addPage(state) {
            state.page++;
        },
        resetState(state) {
            state.loading = false;
            state.dados = null;
            state.erro = null;
            state.lista = [];
            state.page = 1;
            state.infinite = true;
        }
    },
    fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user })
});

export const fetchFeed = slice.asyncAction;

export const { addPhotos, addPage, resetState: resetFeedState } = slice.actions;

export const loadNewPhotos = ({ total = 6, user }) => async (dispatch, getState) => {
    const { feed } = getState();

    dispatch(addPage());
    const { payload } = await dispatch(fetchFeed({ page: feed.page, total, user }));
    dispatch(addPhotos(payload));
}

export default slice.reducer;
