import {Navigate} from 'react-router-dom';

function ProtectedRoute(props) {
    const isLoggedIn = props.isLoggedIn;    

    return (
        isLoggedIn ? props.children : <Navigate to="/" />
    )
}

export default ProtectedRoute;