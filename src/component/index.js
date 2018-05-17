import React from 'react'
import styles from './form.css'
export class FormComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <div class="form-style">
            <h2>Login to your Account</h2>
            <form>
              <input type="text" name="field1" placeholder="Full Name" />
              <input type="email" name="field2" placeholder="Email" />
              <input type="url" name="field3" placeholder="Website" />
              <textarea placeholder="Message" onkeyup="adjust_textarea(this)"></textarea>
              <input type="button" value="Send Message" />
            </form>
          </div>
        )
    }
}