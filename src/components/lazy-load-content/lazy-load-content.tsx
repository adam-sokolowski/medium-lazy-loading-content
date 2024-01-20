import { Component, h, Prop, State, Watch } from '@stencil/core';
import { Element, Host, HostElement } from '@stencil/core/internal';

@Component({
  tag: 'lazy-load-content',
})
export class LazyLoadContent {
  @Element() hostElement: HostElement;

  @State() elementId: string;
  @State() isIntersecting: boolean;
  @State() contentInnerHTML: string;
  @State() wasLoadedBefore: boolean; // Variable registering content loading

  @Prop({ attribute: 'cold' }) preventRerender = false; // Prop preventing re-render once loaded slot content

  @Watch('isIntersecting')
  onIsIntersectingChange(newValue: boolean) {
    if (!newValue) {
      return;
    }

    this.wasLoadedBefore = true;
    // Set to true when content is loader for the first time
  }

  intersectionObserver: IntersectionObserver;
  lazyElement: HTMLElement;

  componentWillLoad(): void {
    this.elementId = 'test_id';
    this.contentInnerHTML = this.hostElement.querySelector('[slot="content"]').innerHTML;
  }

  componentDidRender(): void {
    this.lazyElement = document.getElementById(this.elementId);

    this.intersectionObserver = new IntersectionObserver(elements => {
      this.isIntersecting = elements[0].isIntersecting;
      console.info(this.isIntersecting);
    });

    this.intersectionObserver.observe(this.lazyElement);
  }

  disconnectedCallback() {
    this.intersectionObserver.unobserve(this.lazyElement);
  }

  render(): HTMLElement {
    return (
      <Host
        id={this.elementId}
        innerHTML={ (this.wasLoadedBefore && this.preventRerender) || this.isIntersecting ? this.contentInnerHTML : ''}
      />
    );
  }
}