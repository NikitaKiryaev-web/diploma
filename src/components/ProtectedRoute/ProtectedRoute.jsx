import {Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {LoggedInContext} from '../../contexts/LoggedInContext.js';

function ProtectedRoute(props) {
    const {isLoggedIn} = useContext(LoggedInContext);    

    return (
        isLoggedIn ? props.children : <Navigate to="/" />
    )
}

export default ProtectedRoute;