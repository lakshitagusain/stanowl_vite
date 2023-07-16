import { useNavigate } from 'react-router-dom';


const LoginPage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>login</h1>
            <button onClick={()=>navigate("/login/navigation")}>Login to Dashboard</button>
            <button onClick={()=>navigate("/")}>Back to Home</button>
        </div>
    );
}
export default LoginPage;