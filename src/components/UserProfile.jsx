import "./UserProfile.css";

function UserProfile(props){

   const isAdmin = props.isAdmin ? "Admin User" : "No";

    return(
        <div className="user">
            <h2>Username: {props.Username}</h2>
            <p>Age: {props.Age}</p>
            <p>isAdmin: {isAdmin}</p>
        </div>
    )
}

export default UserProfile