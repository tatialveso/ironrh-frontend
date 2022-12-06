import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from '../contexts/authContext.js'

function ProtectedRoute({ Component }) {
    const { loggedUser } = useContext(AuthContext)

    if(loggedUser) {
        return <Component />
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute