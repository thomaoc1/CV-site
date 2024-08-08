import './SidePanelStyle.css'

function Profile() {
    return (
        <div className='profile-section'>
            <img className='profile-picture' src='/profile_picture.png' alt='Profile Picture'/>
            <div>
                <p className='profile-name'> Thomas O'Cuilleanain </p>
                <p className='profile-description'> Machine Learning Engineer <br/> Fullstack Developer </p>
            </div>
        </div>
    )
}

export default Profile;