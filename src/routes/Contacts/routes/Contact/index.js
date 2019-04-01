import { Loadable } from 'utils/components'

export default {
  path: ':contactId',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'ContactPage' */ './components/ContactPage')
  })
}
