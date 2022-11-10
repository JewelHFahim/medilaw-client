import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Error from "../Pages/Others/Error";
import PersonalReview from "../Pages/Review/PersonalReview";
import Review from "../Pages/Review/Review";
import PrivateRoutes from "./PrivateRoutes";
import SingleBlog from "../Pages/Blog/SingleBlog";
import EditReview from "../Pages/Review/EditReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch("https://medilaw-server.vercel.app/services"),
      },

      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://medilaw-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/personalreview",
        element: (
          <PrivateRoutes>
            <PersonalReview></PersonalReview>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        loader: () => fetch("https://medilaw-server.vercel.app/blog"),
        element: <Blog></Blog>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },

      {
        path: "/blog/:id",
        loader: ({ params }) =>
          fetch(`https://medilaw-server.vercel.app/blog/${params.id}`),
        element: <SingleBlog></SingleBlog>,
      },
      {
        path: '/editreview/:id',
        element: <EditReview></EditReview>
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
