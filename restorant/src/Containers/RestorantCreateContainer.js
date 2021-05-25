import RestorantCreate from "../components/RestorantCreate";
import { createResto } from "../Services/Action/action";
import { connect } from "react-redux";


const mapStateToProps = state => ({
   restoCreatedStatus: state.restorentReducer.restoCreatedStatus,
   loading: state.restorentReducer.loading,
   error: state.restorentReducer.error,
   restoList: state.restorentReducer.restoList,
})

const mapDispatchToProps = dispatch => ({
   createRestoHandler: form_data => dispatch(createResto(form_data))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestorantCreate);

