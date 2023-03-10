import React from "react";
import UserCard from "./UserCard";

function UsersList({users, onDeleteUser}){
    // console.log("from list")
    // console.log(users)
    // create variable with value of map of users
    const usersGroup = users.map((user) => 
        <UserCard 
            // a key value is needed when mapping
            key={user.id}
            user={user}
            onDeleteUser={onDeleteUser}
        />)
    return (
        <div>
            <h3>Existing Users</h3>
            {/* <UserCard users={users}/> */}
            {usersGroup}
        </div>
    )
}

export default UsersList