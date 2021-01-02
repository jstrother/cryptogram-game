import { mount, shallowMount } from '@vue/test-utils';
import EncryptedLetter from '@/components/EncryptedLetter.vue';

describe('EncryptedLetter', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(EncryptedLetter, {
      props: {
        letter: 'S', // this prevents errors because 'letter' is a required prop
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('displays a letter', () => {
    const wrapper = shallowMount(EncryptedLetter, {
      propsData: {
        letter: 'L',
      },
    });

    expect(wrapper.props().letter).toBe('L');
  });
});
