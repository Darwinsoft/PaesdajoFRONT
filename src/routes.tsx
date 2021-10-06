import { Switch, Route } from 'react-router-dom'

import { ClientList } from './pages/Clients'
import { Home } from './pages/Home'

export const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/clients" component={ClientList} />
        </ Switch>
    )
}