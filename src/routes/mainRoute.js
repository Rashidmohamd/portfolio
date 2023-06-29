import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';
import App from '../pages/App';
import Porjects from '../pages/Projects';
import Error from '../pages/Error';
import About from '../pages/About';
import Contact from '../pages/Contact';
const ProvideRouter = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Home/>,
                },
                {
                    path:"/project",
                    element:<Porjects/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:'/*',
                    element:<Error/>
                }
            ]
        }
    ])
    return <RouterProvider router={router}/>;
}
 
export default ProvideRouter;