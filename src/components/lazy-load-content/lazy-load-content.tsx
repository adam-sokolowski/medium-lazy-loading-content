import { Component, h, State } from '@stencil/core';
import { Element, Host, HostElement } from '@stencil/core/internal';

@Component({
  tag: 'lazy-load-content',
})
export class LazyLoadContent {

  @Element() hostElement: HostElement;

  @State() elementId = '';
  @State() isIntersecting: boolean;
  @State() contentInnerHTML: string;

  intersectionObserver: IntersectionObserver;
  lazyElement: HTMLElement;

  componentWillLoad(): void {
    this.elementId = '...generate_random_id';
    this.contentInnerHTML = this.hostElement.querySelector('[slot="content"]').innerHTML;
  }

  componentDidRender(): void {
    this.lazyElement = document.getElementById(this.elementId);

    this.intersectionObserver = new IntersectionObserver(elements => {
      this.isIntersecting = elements[0].isIntersecting;
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
        innerHTML={ this.isIntersecting ? this.contentInnerHTML : ''}
      />
    );
  }
}