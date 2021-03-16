import React from "react";
import { Provider } from 'react-redux';
import { Router, Route, Switch} from "react-router-dom"
import Home from "./modules/home/components"
import CreateBook from "./modules/books/components/CreateBook"
import BookDetails from "./modules/books/components/BookDetails"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import AppLayout from "./modules/layout/AppLayout"
import store from "./config/store"
import './App.scss';

import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <AppLayout>
            <Switch>
              <Route path="/book/create" component={CreateBook}/>
              <Route path="/book/edit/:bookId" component={CreateBook}/>
              <Route path="/book/:bookId" component={BookDetails}/>
              <Route path="/" component={Home}/>

            </Switch>
          </AppLayout>
        </Router>
      </Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;
