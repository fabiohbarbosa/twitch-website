import { shallowMount } from '@vue/test-utils'
import WelcomeMessage from '@/components/Home/WelcomeMessage'

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'Test'

    const wrapper = shallowMount(WelcomeMessage, {
      propsData: { name }
    })

    expect(wrapper.text()).toBe('Hello Test !')
  })
})
