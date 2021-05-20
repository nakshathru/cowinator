
 import "../../components/login";
 import {LitElement, html } from 'lit';
 import {customElement} from 'lit/decorators.js';


 @customElement('login-module')
 export class LoginModule extends LitElement {
   render() {
     return html`
       <login-phone/></login-phone>
     `;
   }

 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'login-module': LoginModule;
   }
 }
 