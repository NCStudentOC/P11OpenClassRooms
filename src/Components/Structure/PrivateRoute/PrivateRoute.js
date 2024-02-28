import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { User } from '../../../Pages/User';

const PrivateRoute = () => {

    // const token = useSelector(state => state.user.token);

    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    console.log("token recupéré :", token)

    return token ? <User /> : <Navigate to="/SignIn" replace />;
};

export default PrivateRoute;


