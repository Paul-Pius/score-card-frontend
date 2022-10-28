import React from 'react'
import * as FiIcons from 'react-icons/fi'
export const SideBarData = [
    {
        icon: <FiIcons.FiHome size={20} />,
        title: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: <FiIcons.FiUsers size={20} />,
        title: 'User Management',
        path: '/viewdecadevs'
    },
    {
        icon: <FiIcons.FiUserX size={20} />,
        title: 'Admin Management',
        path: '/adminmanagement'
    }
]