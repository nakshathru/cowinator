/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let LoginPhone = class LoginPhone extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    render() {
        return html `
       <h1>Hello hhiidsi, ${this.name}!</h1>
       <a href="/">Home</a>
        <a class="active" href="/login">Login</a>
       <button @click=${this._onClick} part="button">
         Click Count: ${this.count}
       </button>
       <slot></slot>
     `;
    }
    _onClick() {
        this.count++;
    }
    foo() {
        return 'foo';
    }
};
LoginPhone.styles = css `
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
__decorate([
    property()
], LoginPhone.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], LoginPhone.prototype, "count", void 0);
LoginPhone = __decorate([
    customElement('login-phone')
], LoginPhone);
export { LoginPhone };
//# sourceMappingURL=index.js.map