import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

import Vue from 'vue'

import Buefy from 'buefy'

Vue.use(Buefy)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.find({ ref: 'a1b' }))
  })
})
