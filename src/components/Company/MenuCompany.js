import React from 'react'
import Dashboard from '../Home/Dashboard'
import GetStart from './GetStart'
import Details from './AccountDetails'
import Settings from './Settings'
import Users from './Users'
import Organisation from './Organisation'
import Locations from './Locations'
import Departments from './Departments';
import WrapHome from '../Home/WrapHome'

const Breadcrumb = ({name}) => (
    <li className="nav-item px-1"> Company Setup / {name}</li>
)

const MenuCompany = [
  {
      path: '/company/getstart',
      name: "Getting Started",
      icon: "fa fa-desktop",
      breadcrumb: () => (<Breadcrumb name={"Getting Started"}/>),
      main: (props) => (<WrapHome menu={MenuCompany} {...props} component={GetStart}/>)
  },
  {
      path: '/company/details',
      name: "Account Details",
      icon: "fa fa-university",
      breadcrumb: () => (<Breadcrumb name={"Account Details"}/>),
      main: (props) => (<WrapHome menu={MenuCompany} {...props} component={Details}/>)
  },
  {
      path: '/company/settings',
      name: "App Settings",
      icon: "fa fa-cog",
      breadcrumb: () => (<Breadcrumb name={"App Settings"}/>),
      main: (props) => (<WrapHome menu={MenuCompany} {...props} component={Settings}/>)
  },
  {
      path: '/company/expense',
      name: "Expense Types",
      icon: "icon-wallet",
      breadcrumb: () => (<Breadcrumb name={"Expense Types"}/>),
      main: (props) => (<WrapHome menu={MenuCompany} {...props} component={Dashboard}/>)
  },
  {
        path: '/company/leave',
        name: "Leave Types",
        icon: "fa fa-calendar-plus-o",
        breadcrumb: () => (<Breadcrumb name={"Expense Types"}/>),
        main: (props) => (<WrapHome menu={MenuCompany} {...props} component={Dashboard}/>)
    },
  {
      path: '/company/locations',
      name: "Locations",
      icon: "fa fa-map-marker",
      breadcrumb: () => (<Breadcrumb name={"Locations"}/>),
      main: (props) => (<WrapHome menu={MenuCompany} {...props} component={Locations}/>)
  },
  {
      path: '/company/departments',
      name: "Departments",
      icon: "fa fa-hospital-o",
      breadcrumb: () => (<Breadcrumb name={"Departments"}/>),
      main: (props) => (<WrapHome menu={MenuCompany} {...props} component={Departments}/>)
  },
  {
      path: '/company/organisation',
      name: "Organisation",
      icon: "fa fa-sitemap",
      breadcrumb: () => (<Breadcrumb name={"Organisation"}/>),
      main: (props) => (<WrapHome menu={MenuCompany} {...props} component={Organisation}/>)
  },
  {
      path: '/company/users',
      name: "Users",
      icon: "fa fa-users",
      breadcrumb: () => (<Breadcrumb name={"Users"}/>),
      main: (props) => (<WrapHome menu={MenuCompany} {...props} component={Users}/>)
  }
]

export default MenuCompany
