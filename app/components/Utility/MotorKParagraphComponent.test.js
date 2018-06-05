import Vue from 'vue'
import MotorKParagraphComponent from './MotorKParagraphComponent.vue'

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('MotorKParagraphComponent', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(MotorKParagraphComponent, {
        paragraphData: {
            displayText: 'Hello'
        }
    })).toBe('Hello')

    expect(getRenderedText(MotorKParagraphComponent, {
        paragraphData: {
            displayText: 'I am testing data'
        }
    })).toBe('I am testing data')
  })
})