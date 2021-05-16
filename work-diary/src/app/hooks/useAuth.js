import { useContext } from "react";
import { UserContext} from "../storage/homeStorage";
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useDataContext debe de estar dentro del provedor");
  }
  return context;
}