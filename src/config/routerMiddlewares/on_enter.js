import transitionPath from 'router5.transition-path';

const ensureDataLoaded = store => (state, action) => new Promise(resolve => {
  const listener = () => {
    const data = store.getState()[state]
    if(data.length > 0) {
      resolve();
      unsubscribe();
      return true;
    }
    return false;
  }
  const unsubscribe = store.subscribe(listener)
  if (!listener()) {
    store.dispatch(action())
  }
})

const findRouteByName = (routes, routeName) => {
  return routes.find(route => route.name === routeName)
}

const onEnterMiddleware = (routes) => (router, dependencies) => (toState, fromState) => {
  console.log('lets go')
  const { toActivate } = transitionPath(toState, fromState)
  const onEnterPromises = toActivate.map(routeName => findRouteByName(routes, routeName))
                         .filter(route => typeof route.onEnter === "function")
                         .map(route => route.onEnter(dependencies.store))
  return Promise.all(onEnterPromises)
};

export { onEnterMiddleware, ensureDataLoaded }
