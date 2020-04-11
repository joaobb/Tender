import React from 'react';

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function EmailInput({ email, handleChange }) {
    return (
        <label className="textInputLabel">
            Email
            <div className="input">
                <FontAwesomeIcon icon={faUser} />
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
            </div>
        </label>
    )
}

export default EmailInput;