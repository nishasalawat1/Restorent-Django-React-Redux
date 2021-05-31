import { combineReducers } from "redux";
import { alert } from "../Reducers/alert.reducer";
import { authentication } from "../Reducers/authentication.reducer";
import { registraion } from "../Reducers/registration.reducer";
import { users } from "../Reducers/users.reducer";

export default combineReducers({
    alert,
    authentication,
    registraion,
    users
})