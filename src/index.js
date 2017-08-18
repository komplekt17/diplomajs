//import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import Auth from './components/Auth'
import './bootstrap.min.css';

render(
	<Router history={browserHistory}>
      <IndexRoute component={App} />
      <Route path='auth' component={Auth} />
	</Router>,
	document.getElementById('root')
)