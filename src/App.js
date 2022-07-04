import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/helpers/SharedLayoutComponent';
import Home from './components/pages/HomeComponent';
import Contact from './components/pages/ContactComponent';
import Error from './components/pages/ErrorComponent';
import About from './components/pages/AboutComponent';
import Projects from './components/pages/ProjectsComponent';
import SingleProjectComponent from './components/pages/SingleProjectComponent';
import SharedProjectsLayoutComponent from './components/helpers/SharedProjectLayoutComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<SharedProjectsLayoutComponent />}>
            <Route index element={<Projects/>}></Route>
            <Route path=':projectId' element={<SingleProjectComponent/>}></Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
