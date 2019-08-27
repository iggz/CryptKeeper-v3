// functional component representing the User Profile page in which
// a given user is able to access their profile

import React from 'react';
import BaseTemplate from '../BaseTemplate';

import AddUserModal from '../Forms/AddUserModal';
import DeleteUserModal from '../Forms/DeleteUserModal';

// import scary from '../../Images/CryptKeeper.jpg';

const UserProfileView = () => {
    const userPage = true;
    return (
        <BaseTemplate userPage={ userPage }>
            <div style={ { height: '100vh', background: '#0D1C25' } }>
                <h1 style={ { display: 'flex', justifyContent: 'center', color: '#3F51B5', margin: 0, height: 50 } }>User Profile View</h1>
                <div style={ { display: 'flex', justifyContent: 'space-between', padding: 15 } }>
                    <DeleteUserModal />
                    <AddUserModal />
                </div>
            </div>

        </BaseTemplate>
    )
};

export default UserProfileView;