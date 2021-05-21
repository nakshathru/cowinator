import {ReactiveController, ReactiveControllerHost} from 'lit';

export class CowinController implements ReactiveController {
  host: ReactiveControllerHost;

  phoneNumber = '';


  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);

  }
  hostConnected() {
    console.log('host connected');
  }
  hostDisconnected() {
    console.log('host disconnected');
  }

  setPhoneNumber(phone: string){
    this.phoneNumber = phone
  }

  getPhoneNumber(){
      return this.phoneNumber
  }
}