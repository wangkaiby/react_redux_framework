import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import  Layout  from './layout'

import Routers from './router' 

import './index.css';


const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Routers/>
      </Layout>
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
