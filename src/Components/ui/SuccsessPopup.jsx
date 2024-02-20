import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SuccsessPopup = ( { successOpen, setSuccessOpen }) => {
    return (
        <>
            <div className={`success ${successOpen && 'success-open'}`}>
                <FontAwesomeIcon icon={faCircleCheck}/>
                <span>Ride Successfully booked!</span>
            </div>
        </>
    );
}

export default SuccsessPopup;
