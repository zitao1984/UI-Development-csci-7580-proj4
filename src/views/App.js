import {useSelector} from "react-redux";
import Login from "../components/Login";
import {LOGIN_STATE} from "../redux/stateConstants"
import JobApp from "../components/JobApp";


const App = () => {
    const loginState = useSelector(state=>state.loginState);
    return (
        <div className="container main my-4">
            {
                loginState !== LOGIN_STATE.LOGGED_IN ?
                    <Login />
                    :
                   <JobApp/>
            }
        </div>
    )
}

export default App;
