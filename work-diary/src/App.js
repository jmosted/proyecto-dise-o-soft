import Route from "./app/routes/routes";
import PrivateRoute from "./app/routes/protected/protectedRoutes";
import PublicRoutes from "./app/routes/public/publicRoutes";
import { Fragment } from "react";
import {useUserContext} from "./app/hooks/useAuth"

function App() {
  const {User} = useUserContext();
  return (
    <Fragment>{User ? <PrivateRoute /> : <PublicRoutes />}</Fragment>
  );
}

export default App;
