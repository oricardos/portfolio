import { Layout } from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Projects } from './components/pages/Projects';
import { NotFound } from './components/pages/NotFound';
import style from './App.module.css';
import { Home } from './components/Home';
import { Blog } from './components/pages/Blog';

function App() {
  return (
    <div className={style.__wrapper}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route path="blog" element={<Blog />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
