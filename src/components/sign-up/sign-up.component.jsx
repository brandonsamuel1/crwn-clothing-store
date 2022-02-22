import React from "react";
import Alert from "@mui/material/Alert";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            fail: false,
            success: false
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            this.setState({ fail: true })
            setTimeout(() => {
                this.setState({ fail: false })
            }, 2000)
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDoc(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                success: true
            })
            setTimeout(() => {
                this.setState({ success: false })
            }, 2000)

        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword, fail, success } = this.state
        return (
            <div className="sign-up">
                {fail ? <Alert severity="error">Password credentials did not match! Try again</Alert> : <></>}
                {success ? <Alert severity="success">Success!</Alert> : <></>}
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" />
                    <FormInput type="text" name="email" value={email} onChange={this.handleChange} label="Email" />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;