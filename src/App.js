import './App.scss'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
    </Route>
  )
);
const App = () => {
  return <div className="App">
     <RouterProvider router={router} />
  </div>
}

export default App
