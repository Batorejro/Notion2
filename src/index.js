import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BrowserRouter from 'react-router-dom';

//ReactDOM.render{
//<BrowserRouter>
//  <App/> 
// </BrowserRouter>,    
//document.getElementById('root')
//};


//const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

