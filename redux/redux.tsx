import React from 'react'
import {Provider} from 'react-redux'
// import {initializeStore} from '../store'
// import App from 'next/app'
import store from "./store";

export const withRedux = (PageComponent, {ssr = true} = {}) => {
    return ({initialReduxState, ...props}) => {
        // const store = getOrInitializeStore(initialReduxState)
        return (
            <Provider store={store}>
                <PageComponent {...props} />
            </Provider>
        )
    };
};
