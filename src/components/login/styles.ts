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
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
  }
  .input_box {
    z-index: 1000;
    width: 90%;
    max-width: 400px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  }

  .input_box .prefix {
    font-size: 13px;
    letter-spacing: 2px;
    font-family: 'Montserrat', sans-serif;
    color: #999;
    padding-left: 8px;
  }

  .formInput {
    height: 45px;
    margin: 4px 0;
    padding-left: 5px;
    font-size: 13px;
    letter-spacing: 2px;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
  }

  .formInputError {
    margin-top: 15px;
  }
  .hideInputError {
    visibility: hidden;
  }
  .input_box:focus-within {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }

  .title {
    font-size: 34px;
    font-weight: 450;
    line-height: 3;
    color: #969696;
    z-index: 1000;
  }

  .button {
    width: 60%;
    max-width: 180px;
    height: 50px;
    cursor: pointer;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
    z-index: 1000;
  }

  .disabledButton {
    cursor: not-allowed;
    background-color: #a6bbfb
  }
  
  .button:hover {
    box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
    transform: scale(0.985);
    transition: 0.25s;
  }
  .button:active,
  .button:focus {
    box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
    transform: scale(0.97);
    transition: 0.25s;
  }

  .switch {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 position: absolute;
	 top: 0;
	 left: 0;
	 height: 100%;
	 width: 400px;
	 padding: 50px;
	 z-index: 200;
	 transition: 1.25s;
	 background-color: #ecf0f3;
	 overflow: hidden;
	 box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
}
 .switch__circle {
	 position: absolute;
	 width: 400px;
	 height: 400px;
	 border-radius: 50%;
	 background-color: #ecf0f3;
	 box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
	 bottom: -60%;
	 left: -60%;
	 transition: 1.25s;
}
 .switch__circle--t {
	 top: -40%;
	 left: 60%;
	 width: 300px;
	 height: 300px;
}

`;
