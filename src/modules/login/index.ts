
 import "../../components/login";
 import {LitElement, html } from 'lit';
 import {customElement} from 'lit/decorators.js';
 import { styles } from "./styles";

 @customElement('login-module')
 export class LoginModule extends LitElement {
   static styles = styles
   render() {
     return html`
     <lit-login></lit-login>
     `;
   }

 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'login-module': LoginModule;
   }
 }
 