import '../../components/dashboard';
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import { styles } from './styles';
@customElement('home-module')
export class LoginModule extends LitElement {
  static styles = styles

  render() {
    return html` <lit-dashboard></lit-dashboard> `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'home-module': LoginModule;
  }
}
