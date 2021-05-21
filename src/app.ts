import {LitElement, html } from 'lit';
import {customElement} from 'lit/decorators.js';
import { styles } from './styles';

@customElement('cowin-app')
export class CowinApp extends LitElement {
  static styles = styles
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