import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { validateUser } from "../redux/actions";
import { LOGIN_STATE } from "../redux/stateConstants"

let editingBegun = false;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginState = useSelector(state => state.loginState);

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(validateUser(username, password));
        clearForm();
    }

    const handleKeyPress = event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            handleLogin();
        }
    }

    const clearForm = () => {
        editingBegun = false;
        setUsername("");
        setPassword("");
    }

    return (
        <>
            {
                !editingBegun && loginState === LOGIN_STATE.INVALID_LOGIN &&
                <div className="alert alert-danger">Invalid username / password! Please try again.</div>
            }
            {
                !editingBegun && loginState === LOGIN_STATE.NETWORK_ERROR &&
                <div className="alert alert-danger">Unable to connect to the server. Please check your internet connection.</div>
            }
            <div className="row my-4 add-form">
                <div className="col-12 col-sm-2">
                    <label htmlFor="username" className="form-label">Username:</label>
                </div>
                <div className="col">
                    <input type="text" id="username" name="username"
                           className="form-control"
                           value={username} onChange={e => {
                        editingBegun = true;
                        setUsername(e.target.value);
                    }}
                           onKeyUp={e => handleKeyPress(e)}
                    />
                </div>
            </div>
            <div className="row my-4 add-form">
                <div className="col-12 col-sm-2">
                    <label htmlFor="password" className="form-label">Password:</label>
                </div>
                <div className="col">
                    <input type="password" id="password" name="password"
                           className="form-control"
                           value={password} onChange={e => {
                        editingBegun = true;
                        setPassword(e.target.value);
                    }}
                           onKeyUp={e => handleKeyPress(e)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-secondary float-end" onClick={handleLogin}>
                        Log in
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login;