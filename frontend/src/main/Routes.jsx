import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/users/UserCrud'
import Linhas from '../components/linhas/Linhas'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/linhas' component={Linhas} />
        <Redirect from='*' to='/' />
    </Switch>