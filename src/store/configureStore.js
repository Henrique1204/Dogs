import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import photo from "./photo.js";
import token from "./token.js";
import user from "./user.js";
import feed from "./feed.js";
import ui from "./ui.js";
import photoPost from "./photoPost.js";

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, token, user, feed, ui, photoPost });
const store = configureStore({ reducer, middleware });

export default store;
