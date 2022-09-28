import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = ({ user, redirectPath = '/signup' }: any) => {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute



// nayel >>> https://www.robinwieruch.de/react-router-private-routes/