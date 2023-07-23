import React from 'react';
import {Navigate} from "react-router-dom";
import UserAccount from "./UserAccount.jsx";

function ProtectedRoute() {
    return (
        localStorage.getItem('userToken') ? <UserAccount/> : <Navigate to={'/login'}/>
    );
}

export default ProtectedRoute;