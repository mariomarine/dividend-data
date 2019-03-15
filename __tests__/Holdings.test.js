import { mount } from '@vue/test-utils';
import Holdings from '../components/Holdings.vue';

describe('Holdings.vue', () => {
  test('should mount for testing', () => {
    expect(1).toEqual(1);
  });
  test('should render content correctly', () => {
	const wrapper = mount(Holdings);
	expect(wrapper.vm.$el).toMatchSnapshot();
  });
});

