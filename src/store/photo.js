import { PHOTO_GET } from "../api";

const FETCH_PHOTO_STARTED = "photo/fetchStarted";
const FETCH_PHOTO_SUCESS = "photo/fetchSucess";
const FETCH_PHOTO_FAIL = "photo/fetchFail";

const fetchPhotoStarted = () => ({ type: FETCH_PHOTO_STARTED });
const fetchPhotoSucess = (payload) => ({ type: FETCH_PHOTO_SUCESS, payload });
const fetchPhotoFail = (payload) => ({ type: FETCH_PHOTO_FAIL, payload });

const initialState = {
    loading: false,
    dados: null,
    erro: null
};

export const fetchPhoto = (id) => async (dispatch) => {
    try {
        dispatch(fetchPhotoStarted());

        const { url, options } = PHOTO_GET(id);
        const res = await fetch(url, options);
        const dados = await res.json();

        if (res.ok === false) throw new Error(dados.message);

        dispatch(fetchPhotoSucess(dados));
    } catch ({ message }) {
        dispatch(fetchPhotoFail(message))
    }
}

export default function photo(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHOTO_STARTED: return { ...state, loading: true, dados: null, erro: null};
        case FETCH_PHOTO_SUCESS: return { ...state, loading: false, dados: action.payload, erro: null };
        case FETCH_PHOTO_FAIL: return { ...state, loading: false, dados: null, erro: action.payload };
        default: return state;
    }
}
