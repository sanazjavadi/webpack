import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  test('should render', () => {
    const wrapper = shallow(
      <App />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})