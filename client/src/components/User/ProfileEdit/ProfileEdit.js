import './ProfileEdit.css'
import { useState } from 'react'
import { dateFormatValidator } from '../../../utils/validators/validators'


const ProfileEdit = (props) => {

    const [user, setUser] = useState({})
    const [securityDate, setSecurityDate] = useState('')

    function userOnChange(event) {
        setUser(() => ({ ...user, gender: event.target.name }))
    }

    function securityDateCheck(event) {
        const rowDate = event.target.value
        setSecurityDate(state => dateFormatValidator(rowDate, state))
    }

    return (
        <div className="profile-edit-wrapper">
            <form className="profile-edit-form">
                <h1 className="profile-edit-title">Edit Profile</h1>
                <div className="profile-edit-errors">
                    <p className="profile-edit-error"></p>
                </div>
                <div className="form-validation">
                    <p>Username is incorrect!</p>
                </div>
                <div className="profile-edit-input">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        defaultValue="Kolio"
                    />
                </div>
                <div className="profile-edit-input">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        defaultValue=""
                    />
                </div>
                <div className="profile-edit-input">
                    <div className="profile-gender">
                        <h4>Gender:</h4>
                        <div className="profile-gender-wrapper">
                            <label htmlFor="gender">Male</label>
                            <input
                                type="radio"
                                name="male"
                                checked={user.gender === "male" || user.gender === undefined}
                                onChange={userOnChange}
                                id="male"
                            />
                        </div>
                        <div className="profile-gender-wrapper">
                            <label htmlFor="gender">Female</label>
                            <input
                                type="radio"
                                name="female"
                                id="female"
                                onChange={userOnChange}
                                checked={user.gender === "female"}
                            />
                        </div>
                    </div>
                </div>
                <div className="profile-edit-card-container">
                    <div className="profile-edit-input">
                        <label htmlFor="card-number">Card number</label>
                        <input type="number" name="card-number" id="card-number" max={5} />
                    </div>
                    <div className="profile-edit-security-container">
                        <div className="profile-edit-input">
                            <label htmlFor="card-expires">Expires</label>
                            <input type="text" name="card-expires" id="card-expires" onChange={securityDateCheck} value={securityDate} maxLength={5} />
                        </div>
                        <div className="profile-edit-input">
                            <label htmlFor="card-security">Security Pin</label>
                            <input type="number" name="card-security" id="card-security" max={3} />
                        </div>
                    </div>
                </div>
                <div className="profile-edit-container">
                    <input type="submit" value="Log In" />
                </div>
            </form>
        </div>
    )
}


export default ProfileEdit