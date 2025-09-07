export const createStore = (reducer, initionalState) =>{
    let state = initionalState;
    let subscribers = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        subscribers.forEach(subscriber => subscriber());
    }

    const subscribe = lictener => {
        subscribers.push(listener);
        return () => subscribers = subscribers.filter(subscribe => subscribe !== listener);
    }

    return {getState, dispatch, subscribe};
}