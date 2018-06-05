import Vue from 'vue'
import FileUpload from './FileUpload.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('FileUpload', () => {
  // Inspect the raw component options
  it('sets the correct default data', () => {
    expect(typeof FileUpload.data).toBe('function')
    const defaultData = FileUpload.data()
    expect(defaultData.image).toBe('')
  })
})