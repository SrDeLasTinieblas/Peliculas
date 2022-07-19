import { useAuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export function ProtectedRoute({children}){
    const {user, loading} = useAuthContext();

    if(loading){ return <Loading /> }

    if(!user){
        return <Navigate to='/login'/>
    }
    
    return <>{children}</>;

}