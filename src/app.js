import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router/Router';
import DotRing from './Shared/DotRing/DotRing';

function App() {
  return (
    <div className="max-h-screen static">
      <DotRing />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
