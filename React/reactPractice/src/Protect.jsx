import { Navigate } from "react-router-dom";

let Protect = ({children}) => {
    let isGranted = localStorage.getItem('isGranted');

    if(isGranted === 'false' || !isGranted)
        return <Navigate to={'/login'}/>
    return children;
}
export default Protect;