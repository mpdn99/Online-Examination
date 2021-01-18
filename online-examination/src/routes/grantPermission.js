import React from 'react'

const grantPermission = (requestedRoles) => {
    const permittedRoles =  sessionStorage.getItem('roles');
    return (permittedRoles===requestedRoles)
}

export default grantPermission
