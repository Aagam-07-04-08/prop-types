import UserProfile from "./components/UserProfile.jsx"
import Greetings from "./components/Greetings.jsx";
import Header from "./components/Header.jsx";
import {Footer,Sidebar} from "./components/Footer.jsx";
import propTypes from "prop-types";
import "./index.css";

// UserProfile.propTypes = {
//   Username: propTypes.string.isRequired,
//   Age: propTypes.number.isRequired,
//   isAdmin: propTypes.bool.isRequired
// }

function App() {

  return (
      <div className="container">
        {/* <Header/> */}
        <Greetings name="Aagam"/>
        {/* <div className="user">
          <UserProfile Username="Aagam" Age={18} isAdmin={true}/>
        </div>
        <Sidebar/>
        <Footer/> */}
      </div>
  )
}

export default App
