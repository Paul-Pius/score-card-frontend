import * as React from 'react';
import { LoginHeading } from '../styling/css';
import AuthenticationRight from "./AuthenticationRight";
import ScorecardLogo from './ScorecardLogo';
import { Link } from "react-router-dom";
import AuthenticationLeftSuperAdmin from './AuthenticationLeftSuperAdmin';


interface IAuthenticationBodyProps {
}

const AuthenticationBodySuperAdmin: React.FunctionComponent = () => {
    const [isAdmin, setIsAdmin] = React.useState(false)
    return (
        <div className='body'>
            <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                <div style={{ flex: '1', margin: "3rem 5rem" }}>
                    <ScorecardLogo />
                    <LoginHeading><div className='left'>Login to your account</div></LoginHeading>
                    <AuthenticationLeftSuperAdmin />
                    <p style={{textAlign: "right" }}><Link to="/forgot-password" style={{textDecoration: "none", color: "#34A853"}}><div className='fpw'>Forgot Password?</div></Link></p>
                    <p style={{textAlign: "center"}}>Don't have an account? <Link to="/signup" style={{textDecoration: "none", color: "#34A853"}}>Sign Up</Link></p>
                    {/* <button onClick={()=>setIsAdmin(!isAdmin)}>{`${isAdmin?'User Login':'Admin Login'}`}</button> */}
                </div >
    <div style={{ flex: "1" }}>
        <AuthenticationRight />
    </div>
            </div >
        </div >
    );
};

export default AuthenticationBodySuperAdmin;
