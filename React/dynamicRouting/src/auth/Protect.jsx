import { Navigate } from "react-router-dom";

let Protect = ({children})=> {
    let isAuth = localStorage.getItem('isAuth');
    if(isAuth==='false'){
        return <Navigate to={'/login'}/>
    }
    return children;
}

export default Protect;