import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch/:id",
        element: <WatchPage />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
