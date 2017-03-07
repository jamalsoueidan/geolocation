import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import { onEnterMiddleware, ensureDataLoaded } from './routerMiddlewares/on_enter.js'
import { City, Place } from 'pages'
import { load } from 'data/cities/actions'

const routes = [
  { name: 'application', path: '/', onEnter: (store) => ensureDataLoaded(store)('cities', load)},
  { name: 'application.city', path: ':city', component: City },
  { name: 'application.city.place', path: '/:place', component: Place },
];

const router = createRouter(routes, {
  defaultRoute: 'application',
  trailingSlash: false
})
.usePlugin(browserPlugin({useHash: true}))
.usePlugin(listenersPlugin())
.useMiddleware(onEnterMiddleware(routes));

window.router = router

export { router as default, routes }
