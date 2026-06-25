import "./Greetings.css"

function Greetings({name = "Guest"}){

    return(
        <div className="greet">
             <h1>Hello, {name}!</h1>
        </div>
    )
}

export default Greetings