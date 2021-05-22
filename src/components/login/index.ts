import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styles} from './styles';
import {Router} from '@vaadin/router'
@customElement('lit-login')
export class LitLogin extends LitElement {
  static styles = styles;

  @property()
  phoneNumber = '';

  @property({type: Boolean})
  isPhoneValid = false;

  @property({type: Object})
  classes = {
    input: {hideInputError: true, formInputError: true},
    button: {button: true, disabledButton: false}
  }
  
  render() {    
    return html`
      <div class="main">
        <div class="container">
          <div class="switch__circle"></div>
          <div class="switch__circle switch__circle--t"></div>
          <form class="form" onsubmit="return false;" autocomplete="off">
            <h2 class="form_title title">Cowinator</h2>
            <div class="input_box">
              <span class="prefix">+91</span>
              <input
                id="phone_no"
                @keyup=${this._onChange}
                class="formInput"
                type="tel"
                placeholder="Phone"
                maxlength="10"
              />
            </div>
            <div class=${classMap(this.classes.input)} >Oops!</div>
            <button class=${classMap(this.classes.button)} @click=${this._onClick}>SIGN IN</button>
          </form>
        </div>
      </div>
    `;
  }

  private _onChange(event: any) {    
    const currentValue = event.target.value || '';
    if (currentValue != this.phoneNumber) {
      this.phoneNumber = currentValue;
      this.isPhoneValid = /^((6|7|8|9)\d{9})$/.test(this.phoneNumber);
      this.classes.input.hideInputError = this.isPhoneValid
      this.classes.button.disabledButton = !this.isPhoneValid
    }
  }

  private _onClick() {
    if(this.isPhoneValid){
      sessionStorage.setItem('phone_no',this.phoneNumber)
      Router.go('/')
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-login': LitLogin;
  }
}
