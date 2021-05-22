
 import "../../components/login";
 import {LitElement, html } from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 import { styles } from "./styles";
import { Router } from "@vaadin/router";

 @customElement('login-module')
 export class LoginModule extends LitElement {
   static styles = styles

   @property()
   phoneNumber = '';
   
   connectedCallback(){
    super.connectedCallback()
    this.phoneNumber = sessionStorage.getItem('phone_no') || ''
    if(this.phoneNumber){
      Router.go('/')
      this.disconnectedCallback();
    }
  }

  disconnectedCallback(){
    super.disconnectedCallback()
    this.style.all='unset'
  }

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
 