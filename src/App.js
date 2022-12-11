
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Aboutme from './Components/Aboutme/Aboutme';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layouts/Main';
import Details from './Components/Project/Details';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <Aboutme />
        },
        {
          path: `details/:id`,
          element: <Details />,

        },
        {
          path: '/blog',
          element: <Blog />
        }
      ]
    }
  ])
  return (
    <div className="App container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
