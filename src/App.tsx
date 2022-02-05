import React, { lazy, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@crystals/uikit'
import AOS from 'aos'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import PageLoader from './components/PageLoader'
import history from './routerHistory'
import 'aos/dist/aos.css'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
    </Router>
  )
}

export default React.memo(App)
