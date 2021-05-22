import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './styles';


@customElement('lit-dashboard')
export class LitDashboard extends LitElement {
  static styles = styles;

  @property()
  phoneNumber = '';

  render() {
    return html`
      <div class="main">
        <div class="container">
          <div class="switch__circle"></div>
          <div class="switch__circle switch__circle--t"></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-dashboard': LitDashboard;
  }
}
