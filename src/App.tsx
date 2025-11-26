import { RouterProvider } from 'react-router-dom';
import { JSX } from 'react';
import './App.scss';
import './Button.scss';
import root from './routers/root';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <RouterProvider router={root}/>
    </div>
  );
};

export default App;
