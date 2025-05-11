import './App.scss';
//import React form "react";
import { Route, Link } from 'react-router-dom';
import { Home } from './Pages/home';
import { Settings } from './Pages/settings';
import { Teamspace } from './Pages/teamspace';
import { Page3 } from './Pages/page3';
import { Page4 } from './Pages/page4';

import { ContentEditor } from './components/Content';
const App = () => {
    return (


        <div className="App">
            <Route path="/" element={<Home />} />
            <ContentEditor />
            <Route path="/" element={<Settings />} />
            <Route path="/" element={<Teamspace />} />
            <Route path="/" element={<Page3 />} />
            <Route path="/" element={<Page4 />} />
        </div>
    );
};

export default App;