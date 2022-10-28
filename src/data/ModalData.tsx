import React from 'react';
import * as FiIcons from 'react-icons/fi';
export const ModalData = [
    {
        id: 1,
        icon: <FiIcons.FiUser />,
        title: "Profile",
        path: "/profile-page"
    },

    {
        id: 2,
        icon: <FiIcons.FiLock />,
        title: "Change Password",
        path: "/updatepassword"
    },

    {
        id: 3,
        icon: <FiIcons.FiLogOut />,
        title: "Logout",
        path: "/logout"
    }
]