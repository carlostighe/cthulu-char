import React, { useState } from "react";

const Login = ({onSubmit}) => {
    const [showDriveField, setShowDriveField] = useState(false)
    const showField = (e) => {
        return (e === "default") ? setShowDriveField(false) : setShowDriveField(true);
    }

    const authorise = () => {
        console.log("authorse")
        onSubmit();
    }

    return (
        <div className="uk-card-body">
            <select
                className="uk-select uk-form-danger"
                onChange={e => showField(e.target.value)}
            >
                <option value="default">Use default Character Sheet</option>
                <option value="gDrive">Load Character Sheet from Drive</option>
            </select>
            {showDriveField ? (<div className="uk-margin">
                <label className="uk-form-label uk-text-primary" for="form-stacked-text">Enter path for Character Sheet in Google Drive</label>
                <div className="uk-form-controls">
                    <input className="uk-input uk-form-danger" id="form-stacked-text" type="text" placeholder="folder/character.json or character.json..." />
                </div>
            </div>) : (<hr class="uk-divider-icon" />)}
            <div className="uk-position-bottom-right">
                <button 
                    className="uk-button uk-button-danger"
                    value="Continue"
                    onClick={authorise()}/>
            </div>

        </div>
    )
}

export default Login;