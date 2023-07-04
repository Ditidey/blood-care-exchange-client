import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const UserSlider = ({user}) => {
    const {name, email, photo, donor_class, location, last_donation} = user;
    return (
        <div>
            <AwesomeSlider  >
                 <div>
                    <img src={photo} alt="" />
                 </div>
            </AwesomeSlider>
        </div>
    );
};

export default UserSlider;