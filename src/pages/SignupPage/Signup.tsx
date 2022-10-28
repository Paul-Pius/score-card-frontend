import * as React from 'react';
import { LoginHeading } from '../../styling/css';
import AuthenticationLeft from "../../components/SignupAuthLeft";
import AuthenticationRight from "../../components/AuthenticationRight";
import ScorecardLogo from '../../components/ScorecardLogo';
import { Link } from "react-router-dom";




interface IAuthenticationBodyProps {
}

const Signup: React.FunctionComponent = () => {
    return (
        <div className='body'>
            <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                <div style={{ flex: '1', margin: "3rem 5rem" }}>
                    <ScorecardLogo />
                    <LoginHeading><div className='left'></div></LoginHeading>
                    <AuthenticationLeft />
                    <p style={{textAlign: "right" }}><Link to="/forgot-password" style={{textDecoration: "none", color: "#34A853"}}><div className='fpw'></div></Link></p>
                    <p style={{textAlign: "center"}}>Already have an account? <Link to="" style={{textDecoration: "none", color: "#34A853"}}>Sign Up</Link></p>
                </div >
    <div style={{ flex: "1" }}>
        <AuthenticationRight />
    </div>
            </div >
        </div >
    );
};

export default Signup;