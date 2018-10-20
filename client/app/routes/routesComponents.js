import React from 'react'
//Routes o rutas
import * as routes from './route.js'

// User
import Home from '../Components/Home.jsx'
import Login from '../Components/Login.jsx'
import SignUp from '../Components/SignUp.jsx'
import Inicio from '../Components/Inicio.jsx'
import Zona from '../Components/Zona.jsx'
import Cards from '../Components/Cards.jsx'
import Ruta1  from '../Components/Ruta1.jsx'
import Ruta2  from '../Components/Ruta2.jsx'

const RoutesCom = [
    {
        route: routes.SIGNUP,
        components: < SignUp/>
    },
    {
        route: routes.LOGIN,
        components: < Login/>
    },
    {
        route: routes.HOME,
        components: <Home/>
    },
    {
        route: routes.INICIO,
        components: <Inicio/>
    },
    {
        route: routes.ZONA,
        components: <Zona/>
    },
    {
        route: routes.CARDS,
        components: <Cards/>
    },
    {
        route: routes.RUTA1,
        components: <Ruta1/>
    },
    {
        route: routes.RUTA2,
        components: <Ruta2/>
    }
]
export default RoutesCom