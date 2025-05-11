import Container from './components/Container/Container'
import { Routes, Route } from 'react-router-dom';
import NotionAi from './components/NotionAi/notion';
import Home from './components/Home/home'
import Sidebar from './components/Sidebar/Sidebar'
import List from './components/List/List'
import NavBar from './components/Navbar/Navbar'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Favorite from './components/Favorite/Favorite'

const App = () => {
    return (
        <main>
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Navbar" element={<Navbar />} />
                    <Route path="/Sidebar" element={<Sidebar />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/NotionAi" element={<NotionAi />} />
                    <Route path="/list/:listId" element={<List />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Container>
        </main>
    );

};

export default App;
