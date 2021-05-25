import { connect } from "react-redux";
import RestorantUpdate from "../components/RestorantUpdate";
import { restoUpdateAction } from "../Services/Action/action";

const mapStateToProps = state =>({
    loading:state.restorentReducer.loading,
    error:state.restorentReducer.error,
    restoUpdatedStatus: state.restorentReducer.restoUpdatedStatus,
    restoList:state.restorentReducer.restoList,
}) 

const mapDispatchToProps = dispatch => ({
    restoUpdatedHandler : form_data => dispatch(restoUpdateAction(form_data))
})

export default connect(mapStateToProps,mapDispatchToProps)(RestorantUpdate);