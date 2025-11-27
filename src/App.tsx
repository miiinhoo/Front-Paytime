import { RouterProvider } from 'react-router-dom';
import { JSX } from 'react';
import './App.scss';
import './Button.scss';
import root from './routers/root';
import { Toaster } from "react-hot-toast";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Toaster position="top-right"
        reverseOrder={false}/>
      <RouterProvider router={root}/>
    </div>
  );
};

export default App;
