import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'

function PasswordInput({ password, handleChange, title, isConfirmation = false }) {
    const [showPassword, setShowPassword] = useState(false);

    const confirmation = isConfirmation ? "Confirmation" : "";

    return (
        <label className="textInputLabel">
            {title ? title : "Senha"}
            <div className="input">
                <FontAwesomeIcon icon={faLock} />
                <input
                    name={`password${confirmation}`}
                    id={`password${confirmation}Input`}
                    type={showPassword ? "text" : "password"}
                    className="passwdInput"
                    value={password}
                    onChange={handleChange}
                    required
                />

                <label>
                    {showPassword ?
                        <FontAwesomeIcon icon={faEyeSlash} title="Não mostrar senha" /> :
                        <FontAwesomeIcon icon={faEye} title="Mostrar senha" />
                    }
                    <input id={"showPassword"} type="checkbox" onChange={_ => setShowPassword(!showPassword)} />
                </label>

            </div>
        </label>
    )
}

export default PasswordInput;