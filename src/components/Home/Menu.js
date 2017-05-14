import React from 'react'
import Dashboard from './Dashboard'
import TeamFeeds from './TeamFeeds'
import Projects from './Projects'
import Tasks from './Tasks'
import Time from './Time'
import Expenses from './Expenses'
import Leave from './Leave'
import Reports from './Reports'
import Shifts from './Shifts'
import ShiftsManager from './ShiftsManager'
import WrapHome from './WrapHome'

const Breadcrumb = ({name}) => (
    <li className="nav-item px-1">{name}</li>
)

export const Menu = [
  {
      path: '/',
      exact: true,
      name: "Dashboard",
      icon: "fa fa-home",
      breadcrumb: () => (<Breadcrumb name={"Dashboard"}/>),
      main: (props) => (<WrapHome menu={Menu} {...props} component={Dashboard}/>)
  },
    {
        path: '/dashboard',
        exact: true,
        name: "Dashboard",
        icon: "fa fa-home",
        breadcrumb: () => (<Breadcrumb name={"Dashboard"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={Dashboard}/>)
    }, {
        path: '/teamfeeds',
        name: "Team Feeds",
        icon: "fa fa-desktop",
        breadcrumb: () => (<Breadcrumb name={"Team Feeds"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={TeamFeeds}/>)
    }, {
        path: '/projects',
        name: "Projects",
        icon: "fa fa-tasks",
        breadcrumb: () => (<Breadcrumb name={"Projects"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={Projects}/>)
    }, {
        path: '/tasks',
        name: "Tasks",
        icon: "fa fa-commenting",
        breadcrumb: () => (<Breadcrumb name={"Tasks"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={Tasks}/>)
    }, {
        path: '/time',
        name: "Time",
        icon: "icon-clock",
        breadcrumb: () => (<Breadcrumb name={"Time"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={Time}/>)
    }, {
        path: '/expenses',
        name: "Expenses",
        icon: "fa fa-shopping-bag",
        breadcrumb: () => (<Breadcrumb name={"Expenses"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={Expenses}/>)
    }, {
        path: '/leave',
        name: "Leave",
        icon: "icon-calendar",
        breadcrumb: () => (<Breadcrumb name={"Leave"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={Leave}/>)
    }, {
        path: '/reports',
        name: "Reports",
        icon: "fa fa-bar-chart",
        breadcrumb: () => (<Breadcrumb name={"Reports"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={Reports}/>)
    }, {
        path: '/shifts',
        name: "Shifts",
        icon: "fa fa-calendar-o",
        breadcrumb: () => (<Breadcrumb name={"Shifts"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={Shifts}/>)
    }, {
        path: '/shiftsmanager',
        name: "Shifts Manager",
        icon: "fa fa-users",
        breadcrumb: () => (<Breadcrumb name={"Shifts Manager"}/>),
        main: (props) => (<WrapHome menu={Menu} {...props} component={ShiftsManager}/>)
    }
]

export default Menu
