
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 19
}
//reduce
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: action.newValue
            }
        default:
            return state;

    }

}

// 1. store(wadah besar untuk menyimpan state) 
const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(() => {
    console.log('result change', store.getState());
})

//dispatch
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 13 });
console.log(store.getState());

//subcription