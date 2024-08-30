import { createBrowserRouter } from "react-router-dom";
import ThankYou from "../pages/thank-you";
import Reports from "../pages/reports";
import Home from "../pages/home";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },{
        path:"/thank-you",
        element:<ThankYou />
    },{
        path:"/admin",
        element:<Reports />
    }
])

export default router;