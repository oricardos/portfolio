import { Layout } from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from './components/pages/NotFound';
import style from './App.module.css';
import { Home } from './components/Home';
import { BlogView } from './components/pages/BlogView';

function App() {
    return (
        <div className={style.__wrapper}>
            <Router>
                <Routes>
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="blog">
                            <Route path=":slug" element={<BlogView />} />
                        </Route>
                        {/* <Route path="projects" element={<Projects />} /> */}
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
