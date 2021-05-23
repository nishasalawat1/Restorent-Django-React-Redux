import Login  from "../components/Login";
import  {login}  from "../Services/Action/action";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    loginData: state.loginProcess.loginData,
    loading: state.loginProcess.loading,
    error:   state.loginProcess.error,
})

const mapDispatchToProps = dispatch => ({
    loginHandler : data => dispatch(login(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);