import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiServices';
import { toast } from 'react-toastify';


const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate("");
    const handleLogin = async () => {
        //validate


        //submit API
        let data = await postRegister(email,username, password)
        console.log(data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login');
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span>Already have an account ?</span>
                <button onClick={()=>{navigate('/login')}}>Log in</button>
            </div>
            <div className='title col-4 mx-auto'>
                Vu Khai
            </div>
            <div className='welcome col-4 mx-auto'>
                Welcome here
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={"email"} className="form-control"
                        value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input type={"username"} className="form-control"
                        value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={"password"} className="form-control"
                        value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <div>
                    <button className='btn-submit' onClick={() => handleLogin()}>Register an account</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go to homepage</span>
                </div>
            </div>
        </div>
    )
}

export default Register;
