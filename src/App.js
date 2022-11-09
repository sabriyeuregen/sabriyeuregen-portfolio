import './App.scss'
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>}></Route>
    </Route>
  )
);
const App = () => {
  return <div className="App">
     <RouterProvider router={router} />
  </div>
}

export default App
