import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const handleChange = () => {
        
    }
    const handleSubmit = () => {

    }

    return (
        <>

            <div className="container m-auto flex justify-center items-center h-screen text-4xl font-semibold flex-col">
            <Link className="font-semibold text-3xl absolute top-12 left-10">JobsWay.</Link>
            <form action="" className="flex flex-col justify-between items-center p-3" onSubmit={handleSubmit} >
                <h3 className="-mt-10"><span className="text-primary">Log In to your</span> Company</h3>
                {/* {loginErr && <p className="text-sm font-light mt-3" style={{color:'red'}}>{loginErr}</p> } */}
                <input required onChange={handleChange} name="email" type="email" placeholder="Email" className="m-1 mt-8 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                <input required onChange={handleChange} name="password" type="password" placeholder="Password" className="m-1 text-sm w-full h-14 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                <Link href="" className="text-sm font-light underline w-full text-right mr-14 mt-2">Forgot Password</Link>
                <button type="submit" className="text-white text-lg bg-primary px-7 py-1 m-3 rounded-lg font-medium" style={{ color: '#fff' }}>Sign In</button>
            </form>
            <p className="mt-4 text-sm font-light">
                Company not registerd?
                <Link to="/register" style={{ color: "#008FAE" }} className="underline">
                    Register now
                </Link>
            </p>
        </div>
        </>
    )
}

export default Login
