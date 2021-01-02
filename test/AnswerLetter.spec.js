import { mount } from '@vue/test-utils';
import AnswerLetter from '@/components/AnswerLetter.vue';

let wrapper;

beforeAll(() => {
  wrapper = mount(AnswerLetter);
});

afterAll(() => {
  wrapper.destroy();
});

describe('AnswerLetter', () => {
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
