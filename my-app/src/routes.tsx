import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//importo a pagina que queremo carregar, e coloo como componente do seu respectivo path
import Landing from './pages/Landing';
import OrfanatoMapa from './pages/OrfanatoMap';
function Routes(){
    return (
        <BrowserRouter>
        <Switch> {/* faz com que apenas um rota seja exibida em tela */}
        <Route path="/" exact component= {Landing}/> {/* exact para realizar comparação de igualdade */}
        <Route path="/orfanato-mapa" component= {OrfanatoMapa}/>
        </Switch>


        </BrowserRouter>
    );
}

export default Routes;