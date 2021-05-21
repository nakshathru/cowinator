import {css} from 'lit';

export const styles = css`
  :host {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    background-color: #ecf0f3;
    color: #a0a5a8;
  }

  .main {
    position: relative;
    width: 70%;
    max-width: 400px;
    height: 60%;
    padding: 25px;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf0f3;
    transition: 1.25s;
    z-index: 100;
  }
  

 .switch__circle {
	 position: absolute;
	 width: 500px;
	 height: 500px;
	 border-radius: 50%;
	 background-color: #ecf0f3;
	 box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
	 bottom: -60%;
	 left: -60%;
	 transition: 1.25s;
}
 .switch__circle--t {
	 top: -30%;
	 left: 60%;
	 width: 300px;
	 height: 300px;
}

`;
