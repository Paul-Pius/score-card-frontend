import * as React from 'react';
import photo from "../assets/flex-img.jpg";

interface IAuthenticationRightProps {
}

const AuthenticationRight: React.FunctionComponent<IAuthenticationRightProps> = (props) => {
  return (
    <div className='right'>
        <div >
        <img src={photo} alt="" style={{
                    height: "800px",
                    width: '750px',
                    top: "-75px",
                    objectFit: "cover"
                }} />
        </div>
    </div>
  );
};

export default AuthenticationRight;
