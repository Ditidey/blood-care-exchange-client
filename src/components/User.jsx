import React, { useEffect, useState } from 'react';
import Wave from 'react-wavify';
import UserSlider from './UserSlider';

const User = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <div>
                {
                    users?.map(user=> <UserSlider key={user._id} user={user}></UserSlider>)
                }
            </div>
            <Wave fill="url(#gradient)" options={{
                height: 10,
                amplitude: 20,
                speed: 0.15,
                points: 5
            }}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        {/* <stop offset="0%" stopColor="#d4af37" /> */}
                        <stop offset="80%" stopColor="#f00" />
                    </linearGradient>
                </defs>
            </Wave>
        </div>
    );
};

export default User;