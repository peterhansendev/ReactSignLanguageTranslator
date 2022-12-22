
import { Navigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

const withAuth = Component => props => {
    const user = storageRead( STORAGE_KEY_USER )
    if (user !== null) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" /> 
    }
}
export default withAuth