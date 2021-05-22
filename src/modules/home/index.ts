import '../../components/dashboard';
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { styles } from './styles';
import { Router } from '@vaadin/router';
@customElement('home-module')
export class HomeModule extends LitElement {
  static styles = styles

  @property()
  phoneNumber = '';
  
  connectedCallback() {
    super.connectedCallback();
    this.phoneNumber = sessionStorage.getItem('phone_no') || '';
    console.log('check here from dashboard', this.phoneNumber);
    if (!this.phoneNumber) {
      Router.go('/login');
      this.disconnectedCallback();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.style.all='unset'
  }

  render() {
    return html` 
      <lit-dashboard></lit-dashboard> 
  `}
}
declare global {
  interface HTMLElementTagNameMap {
    'home-module': HomeModule;
  }
}
