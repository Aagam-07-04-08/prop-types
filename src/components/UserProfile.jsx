
function UserProfile(props){

   const isAdmin = props.isAdmin ? "Admin User" : "No";

    return(
        <div>
            <h2>Username: {props.Username}</h2>
            <p>Age: {props.Age}</p>
            <p>isAdmin: {isAdmin}</p>
        </div>
    )
}

export default UserProfile