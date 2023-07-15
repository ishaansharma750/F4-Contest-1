import React, { useState } from "react";
import img from "../image/#03.png"



const Form = () => {

    let [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    function validateForm(event) {
        event.preventDefault()
        if (user.name.length < 3 || user.name.length > 30) {
            setSuccess("")
            return setError("Enter Your Name")

        }
        else if (!user.email.includes("@") || !user.email.includes(".")) {
            setSuccess("")
            return setError("Enter Your Email-id")
        }
        else if (user.password.length < 8 || user.password.length > 15) {
            setSuccess("")
            return setError(" Password must be above 8 char")
        }
        else if (user.password !== user.confirmPassword) {
            setSuccess("")
            return setError("Error : Make sure your Password and Confirm Password match")
        }
        else{
            setSuccess("Successfully Created")
            setError("")

        }

    }

    return (
        <div className="container">

            <div className="left">
                <h2>Find 3D Objects, Mockups and Ilustration here</h2>
                <div className="imagdiv">
                    <img src= { img } alt="image" />
                </div>
            </div>

            <div className="right">
                
                    <div className="upper">
                        <div className="create--head">
                            <h1>Create Account</h1>
                        </div>
                        <div className="signups">
                            <div className="google">
                            <img src="https://i.ibb.co/Mc8r1Z9/google.png" alt="" height= "20px"  width="20px"/>
                            <span>Sign up with Google </span>
                            </div>
                            <div className="facebook">
                            <img src="https://i.ibb.co/19Y78qw/facebook.png" alt="" height="20px" width="20px" />
                            <span>Sign up with Facebook </span>
                            </div>
                        </div>

                    </div>
                    <p className="or">- OR -</p>

                    <div className="lower">

                        <div className="formdiv">
                            <form onSubmit={validateForm}>
                                <input className="fields" type="text" placeholder="Enter Your Name"
                                    onChange={(event) => setUser({ ...user, name: event.target.value })}
                                />
                                
                                <input className="fields" type="email" placeholder="Enter Your Email"
                                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                                />
                                <input className="fields" type="password" placeholder="Enter Your Password"
                                    onChange={(event) => setUser({ ...user, password: event.target.value })}
                                />
                                <input className="fields" type="password" placeholder="Enter Your Confirm Password"
                                    onChange={(event) => setUser({ ...user, confirmPassword: event.target.value })}
                                />

                                <button className="bttn" type="Submit" >Create Account</button>
                            {/* <div> */}
                            </form>
                            
                        </div>
                        <div className="message">
                            {
                                error && <p className="red"> {error}</p>
                            }
                            {
                                success && <p className="green" >{success}</p>
                            }
                        </div>
                    </div>

                
            </div>
        </div>
    )
}


export default Form