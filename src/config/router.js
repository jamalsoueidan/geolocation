import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import { onEnterMiddleware, ensureDataLoaded } from './routerMiddlewares/on_enter.js'
import { CityPage, PlacePage, ClosestPage, AddPage } from 'pages'
import { load } from 'data/cities/actions'

const routes = [
  { name: 'application', path: '/', onEnter: (store) => ensureDataLoaded(store)('cities', load)},
  { name: 'application.closest', path: 'closest', component: ClosestPage },
  { name: 'application.add', path: 'add', component: AddPage },
  { name: 'application.city', path: 'by/:city', component: CityPage },
  { name: 'application.city.place', path: '/sted/:place', component: PlacePage },
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
