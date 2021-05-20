import {LitElement, html } from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('cowin-app')
export class CowinApp extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'cowin-app': CowinApp;
  }
}