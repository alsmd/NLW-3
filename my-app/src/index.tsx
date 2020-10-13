import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render( //recebe um conteudo JSX(HTML) e coloca dentro de uma elemento do html
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')//seleciona o nosso index.html e coloca o conteudo dentro do root
);


