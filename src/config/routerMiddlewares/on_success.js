import { action1, action2 } from 'data/something'

onSuccess => (router, store) => [action1, action2]

onSuccess => (router, store) => {
  const params = router.route.params;
  const user = selector(store.getState());
  return store.dispatch(action1(Object.assign({}, params, { user: user.id }))
}

// onSuccess can dispatch multi actions, can also dispatch custom actions
// all actions will get route.params with the arguments.
// component should NOT connect to redux! should only receive data through props.
// pages display loading, until data is ready, and send them as props to components
// pages should know about the components which props they require!
