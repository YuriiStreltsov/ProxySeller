import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./styles/app.scss";

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
