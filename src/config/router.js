import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import { onEnterMiddleware, ensureDataLoaded } from './routerMiddlewares/on_enter.js'
import { load } from 'data/cities/actions'

const routes = [
  { name: 'application', path: '/', onEnter: (store) => ensureDataLoaded(store)('cities', load), page: "home"},
  { name: 'application.closest', path: 'closest', page: "closest" },
  { name: 'application.add', path: 'add', page: "add" },
  { name: 'application.city', path: 'by/:city', page: "city" },
  { name: 'application.city.place', path: '/sted/:place', page: "place" },
];

const example = (router, dependencies) => (toState, fromState) => {
  console.log(toState)
  return true;
}

const router = createRouter(routes, {
  defaultRoute: 'application',
  trailingSlash: false,
  strictQueryParams: false
})
.usePlugin(browserPlugin({useHash: true}))
.usePlugin(listenersPlugin())
.useMiddleware(onEnterMiddleware(routes))
.useMiddleware(example);

window.router = router

export { router as default, routes }
