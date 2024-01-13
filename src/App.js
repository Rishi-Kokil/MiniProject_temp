import { useEffect } from 'react';
import './App.css';

import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { Home, Detection } from './pages';

const router = createBrowserRouter(
  [
    { path: '/', element: <Home /> },
    { path: '/detect', element: <Detection /> },
  ]
);

function App() {

  return (
    <div className="App">
      {/* wrap the entire app inside the Router Provider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
