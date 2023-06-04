const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterSlice = require("../features/dynamicCounter/dynamicCounterSlice")
const {createLogger} = require("redux-logger");
const postReducer = require("../features/post/postSlice");

const logger = createLogger();

// configure store
const store = configureStore({
    reducer: {
        counter:counterReducer,
        dynamicCounter: dynamicCounterSlice,
        post: postReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports = store;