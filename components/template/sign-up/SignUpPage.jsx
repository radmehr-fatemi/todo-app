import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {

    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const changHandler = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const registerHandler = async (e) => {
    e.preventDefault()
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const { email ,password } = form;

    if ( !email.length && !password.length ) {
        return toast.error("Please enter first")

    } else if ( !regex.test(form.email) ) {
        return toast.error("invalid email")

    } else if ( password.length < 6 ) {
        return toast.error("invalid password")

    } else {
        const res = await fetch("/api/auth/signup" ,{
            method:"POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(form)
        })
        const data = await res.json();
        if ( data.status === "success" ) {
        toast.success("Register was successfully")
        setTimeout( () => router.replace("/") ,1000 )
        } else {
            return toast.error(data.massage)
        }
    }
    };
    
    return (
        <form >
            <h1>Register</h1>

            <label htmlFor="email">Email</label>
            <input type="email" value={form.email} onChange={changHandler} name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" value={form.password} onChange={changHandler} name="password" id="password" />

            <button type="submit" onClick={registerHandler}>Submit</button>

            <ToastContainer style={{
                padding:"1rem"
            }} />
        </form>
    );
};

export default SignUpPage;