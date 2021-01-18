import { useEffect } from 'react';
import Menu from './components/menu';
import Content from './components/content';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middleware from './middleware';
import { loadUser } from './actions/authedUser';

const store = createStore(reducer, middleware);

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    return (
        <Provider store={store}>
            <div className="p-d-flex">
                <Menu />
                <Content />
            </div>
        </Provider>
    )
}

export default App;