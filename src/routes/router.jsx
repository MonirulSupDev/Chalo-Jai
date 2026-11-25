import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "./../pages/Home/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import MyList from "../pages/MyList/MyList";
import Loading from "./../components/Shared/Loading/Loading";
import Error from "./../components/Shared/Error/Error";
import SpotDetails from "../components/SpotDetails/SpotDetails";
import UpdateTouristsSpot from "../pages/UpdateTouristsSpot/UpdateTouristsSpot";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    HydrateFallback: Loading,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      {
        path: "/all-tourists-spot",
        Component: AllTouristsSpot,
        loader: () => fetch("http://localhost:5000/all-tourists-spot"),
      },
      { path: "/add-tourists-spot", Component: AddTouristsSpot },

      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/spot-details/:id",
        Component: SpotDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-tourists-spot/${params.id}`),
      },
      {
        path: "/update-tourists-spot/:id",
        Component: UpdateTouristsSpot,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-tourists-spot/${params.id}`),
      },
      {
        Component: PrivateRoute,
        children: [
          {
            path: "/my-list",
            Component: MyList,
            loader: () => fetch("http://localhost:5000/all-tourists-spot"),
          },
        ],
      },
    ],
  },
]);

export default router;
