
 import {LitElement, html } from 'lit';
 import {customElement} from 'lit/decorators.js';


 @customElement('home-module')
 export class LoginModule extends LitElement {
   render() {
     return html`
        <a class="active" href="/">Home</a>
        <a href="/login">Login</a>
     `;
   }

 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'home-module': LoginModule;
   }
 }
 