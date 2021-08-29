import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Formulario from './pages/Formulario';
import Concluido from './pages/Concluido';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Formulario} />
        <Route path='/concluido' component={Concluido} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;