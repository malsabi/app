import React from 'react';
import './style.css';


function HomePage(){
    return (
        <div
        style={{
            display:'flex',
            justifyContent:'start',
            flexDirection:'column',
            height: '50vh'
        }}>

            <p style={{width:'500px'}}>
                With Secure Password, it's easy to check your password strength and get feedback on your phone, computer, tablet, and more.<br></br><br></br>
                You can also discover how long it takes for a computer to crack your password and how to improve it and make it harder to crack.
            </p>
        </div>
    )
}

export default HomePage;
