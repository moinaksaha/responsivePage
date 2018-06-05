import { shallow } from 'vue-test-utils'
import App from './App'
describe('App', () => {
  it('works', () => {
    const wrapper = shallow(App) 
  })

  it('has a created hook', () => {
    expect(typeof App.created).toBe('function')
  })
})
