import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button: ', () => {
  it('display text', () => {
    const content = 'Hello World';
    const wrapper = mount(Button, {
      slots: {
        default: content,
      },
    });
    expect(wrapper.text()).toBe(content);
  });

  it('prop size', () => {
    const size = 'small';
    const wrapper = mount(Button, {
      props: {
        size,
      },
    });
    expect(wrapper.classes()).toContain(`h-button--${size}`);
  });

  it('prop type', () => {
    const type = 'danger';
    const wrapper = mount(Button, {
      props: {
        type,
      },
    });
    expect(wrapper.classes()).toContain(`h-button--${type}`);
  });

  it('global default size', () => {
    const size = 'mini';
    const wrapper = mount(Button, {
      global: {
        config: {
          globalProperties: {
            $HELEMENT: {
              size,
            },
          },
        },
      },
    });
    expect(wrapper.classes()).toContain(`h-button--${size}`);
  });
});
