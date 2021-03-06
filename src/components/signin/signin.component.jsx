import React from "react";
import Alert from "@mui/material/Alert";
import './signin.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class Signin extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            fail: false,
            success: false
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '', success: true })
            setTimeout(() => {
                this.setState({ success: false })
            }, 2000)
        } catch (error) {
            console.error(error)
            this.setState({ fail: true })
            setTimeout(() => {
                this.setState({ fail: false })
            }, 2000)
        }


    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {
        const { fail, success } = this.state;
        return (
            <div className="sign-in">
                {fail ? <Alert severity="error">Something went wrong! Try again</Alert> : <></>}
                {success ? <Alert severity="success">Success!</Alert> : <></>}
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default Signin;