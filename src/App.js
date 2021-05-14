import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Componentes/Navbar/Navbar';
import Login from './Componentes/Login/Login';
import Index from './Componentes/Index/Index';
import Tarea from './Componentes/Tareas/Tareas';

//Redux
import {Provider} from 'react-redux';
import Store from './Store';

function App() {
  return (
   <Router>
     <Provider store={Store}>
      <Navbar/>
      <div className="container-fluid pt-0">
        <switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/index">
            <Index/>
          </Route>
          <Route path="/tareas">
            <Tarea/>
          </Route>
        </switch>
      </div>
      </Provider>
   </Router>
  );
}

export default App;
