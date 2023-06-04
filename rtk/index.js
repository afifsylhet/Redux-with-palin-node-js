const store = require("./app/store");
const {counterActions} = require("./features/counter/counterSlice");
const {dynamicCounterActions} = require("./features/dynamicCounter/dynamicCounterSlice");
const {fetchPosts} = require("./features/post/postSlice");

// For knowing initial store
// console.log(`This is initial store: ${JSON.stringify(store.getState())}`);
// subscribe to state changes
store.subscribe(()=>{
    // console.log(store.getState())
});

// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

// store.dispatch(dynamicCounterActions.increment(3));
// store.dispatch(dynamicCounterActions.increment(4));
// store.dispatch(dynamicCounterActions.decrement(2));

store.dispatch(fetchPosts())

