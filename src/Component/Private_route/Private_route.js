import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../Auth/Auth_provider'

const Private_route = ({ children }) => {
    const { loading, setLoading, user } = useAuthContext()
    const location = useLocation()

    console.log(loading);
    if (loading) return

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children
}

export default Private_route
