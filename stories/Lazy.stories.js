import { html } from 'lit-html';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/index';

setCustomElementsManifest(customElements);

export default {
  title: 'LazyLoading',
  argTypes: {
    cold: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  }
};

export const WebComponent = (argTypes) => html`
  <section>
  Keep scrolling ⬇️
    <br />
    This component will load the slot content once it intersects with your viewport
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    A little further ⬇️⬇️⬇️
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    Should be around here ✅
    <br />
    <lazy-load-content cold="${argTypes.cold}">
      <div slot="content">
        <span>Some <strong>regular</strong> <i>text</i> we load lazily</span>
      </div>
    </lazy-load-content>
  </section>
`;



