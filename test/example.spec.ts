/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, mount } from '@vue/test-utils';
import { defineComponent, ref } from 'vue';

// Props
const MsgComp = {
  template: '<div>{{ msg }}</div>',
  props: ['msg'],
};

test('prop msg', () => {
  const msg = 'new message';
  const wrapper = shallowMount(MsgComp, {
    props: {
      msg,
    },
  });
  expect(wrapper.text()).toMatch(msg);
});

// User Interaction
const CounterComp = {
  template: `
    <div>
      <button @click="counter++">+</button>
      <span>{{ counter }}</span>
    </div>
  `,
  data() {
    return {
      counter: 0,
    };
  },
};

describe('user interaction', () => {
  const wrapper = shallowMount(CounterComp);
  expect(wrapper.find('span').text()).toBe('0');
  wrapper.find('button').trigger('click').then(() => {
    expect(wrapper.find('span').text()).toBe('1');
  });
});

// Compare shallowMount and mount
const childComp = {
  template: '<div class="child">child</div>',
};
const parentComp = {
  template: '<div><div class="parent">parent</div><child-comp /></div>',
  components: { childComp },
};

describe('compare shallowMount and mount', () => {
  // shallowMount
  it('shallowMount', () => {
    const wrapper = shallowMount(parentComp);
    expect(wrapper.find('.parent').text()).toBe('parent');
    expect(wrapper.find('.child').exists()).toBe(false);
  });
  // mount
  it('mount', () => {
    const wrapper = mount(parentComp);
    expect(wrapper.find('.parent').text()).toBe('parent');
    expect(wrapper.find('.child').text()).toBe('child');
  });
});

// Life Cycle Hooks
const LifeCycleComp = defineComponent({
  template: '<div>{{ counter }}</div>',
  setup() {
    const counter = ref(0);
    const interval = ref<undefined | ReturnType<typeof setInterval>>(undefined);
    const timer = ref(3);
    return {
      counter,
      interval,
      timer,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.counter += 1;
      if (this.counter === this.timer) {
        this.$.appContext.app.unmount();
      }
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval as ReturnType<typeof setInterval>);
  },
});

describe('Life Cycle Hooks', () => {
  jest.useFakeTimers();

  it('before mounted interval', () => {
    const wrapper = mount(LifeCycleComp);
    expect(wrapper.vm.interval).not.toBe(undefined);
  });

  it('counter works', () => {
    const wrapper = mount(LifeCycleComp);
    expect(wrapper.vm.counter).toBe(0);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(1);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(2);
  });

  it('instance gets beforeUnmount', () => {
    const beforeUnmountSpy = jest.spyOn(LifeCycleComp, 'beforeUnmount');
    shallowMount(LifeCycleComp); // necesary to create instance
    jest.advanceTimersByTime(3000);
    expect(beforeUnmountSpy).toHaveBeenCalled();
  });
});
