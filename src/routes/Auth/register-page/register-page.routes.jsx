import { useNavigate } from 'react-router-dom';


const RegisterPage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>Register</h1>
            <button onClick={()=>navigate("/register/navigation")}>Login to Dashboard</button>
            <button onClick={()=>navigate("/")}>Back to Home</button>
        </div>
    );
}
export default RegisterPage;