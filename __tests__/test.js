import { mount } from '@vue/test-utils';
import Logo from '../components/Logo.vue';

describe('App.vue', () => {
  test('should mount for testing', () => {
    expect(1).toEqual(1);
  });
  test('should render content correctly', () => {
	const wrapper = mount(Logo);
	expect(wrapper.vm.$el).toMatchSnapshot();
  });
});

