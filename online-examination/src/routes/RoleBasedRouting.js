import React from 'react'
import {Route} from 'react-router-dom'
import grantPermission from './grantPermission'

const RoleBasedRouting = ({component: Component, roles, ...rest}) => {
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