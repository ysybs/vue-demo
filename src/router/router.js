import App from '../App'

export default [{
    path: '/',
    component: App,
    children:[{
      patch:'',
      component: r =>require.ensure([], () => r(require('../page/home')), 'home')
    }]

}]
