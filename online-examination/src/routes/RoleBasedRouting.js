import React from 'react'
import {Route} from 'react-router-dom'

const RoleBasedRouting = ({component: Component, roles, ...rest}) => {
    const grantPermission = (requestedRoles) => {
        const permittedRoles =  sessionStorage.getItem('roles');
        return (permittedRoles===requestedRoles)

    }
    return (
        <div>
            {grantPermission(roles)&&(
                <Route {...rest}>
                    <div>
                        <Component />
                    </div>
                </Route>
            )}
            {!grantPermission(roles)&&(
                <Route {...rest}>
                    <div>
                        {/* <Unauthorize/> */}
                    </div>
                </Route>    
            )}
        </div>
    )
}

export default RoleBasedRouting