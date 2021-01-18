import React from 'react'

const grantPermission = (requestedRoles) => {
    const token =  sessionStorage.getItem('token');
    const permittedRoles = JSON.parse(token);
    return(permittedRoles.role[0]===requestedRoles)
}

export default grantPermission
