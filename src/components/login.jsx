import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import AxiosInstance from '../config/axiorsInstance';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await AxiosInstance.post('/users/login', { email, password });

            setErrorMessage('');
    
            navigate('/product');

            /*=============== token verifire ===================*/

            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate()+2)

            const cookieValue =encodeURIComponent('token')+'='
                +encodeURIComponent(response.data)+'; expires='+expirationDate.toUTCString()+'; path=/';
            document.cookie =cookieValue;
            console.log(response.data)
            /*================= token verifire ==================*/
        } catch (error) {
            setErrorMessage('Invalid email or password. Please try again.');
            console.error(error);
        }
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                background: 'radial-gradient(circle, #220233, #000000)',
                position: 'relative', 
                overflow: 'hidden', 
            }}
        >
            <div className="container position-relative p-4 bg-white bg-opacity-90 shadow-lg mb-2">

                <div className="text-center mb-4"></div>
                <h1 className="h3 fw-bold text-center text-primary mb-4">Login </h1>
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="Email here"
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Password here"
                            />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <button className="btn btn-primary w-100" onClick={login}>Login</button>
                    </div>
                    {errorMessage && (
                        <div className="col-12 mt-2 text-danger bg-white p-2 rounded">{errorMessage}</div>
                    )}
                    <div className="col-12 mt-2">
                        <Link to="/signup" className="btn btn-outline-primary w-100">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
