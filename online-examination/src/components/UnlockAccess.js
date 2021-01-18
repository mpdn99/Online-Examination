import React from 'react'
import grantPermission from '../routes/grantPermission'

const UnlockAccess = ({ children, request }) => {
    const permission = grantPermission(request); // request = ['ROLE_ADMIN'] / ['ROLE_USER'] / ['ROLE_MANAGER']
    return (
      <div>
        {permission && children}
      </div>
    );
  };
  export default UnlockAccess