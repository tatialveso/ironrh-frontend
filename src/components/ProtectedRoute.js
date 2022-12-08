import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../contexts/authContext.js'

function ProtectedRoute() {
    const { loggedUser } = useContext(AuthContext)
    const navigate = useNavigate()

    if (!loggedUser) {
        return navigate("/")
    }
}

export default ProtectedRoute