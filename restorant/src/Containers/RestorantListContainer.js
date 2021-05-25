import { connect } from "react-redux";
import  RestorantList  from "../components/RestorantList";
import { restoListAction } from "../Services/Action/action";
 
const mapStateToProps = state => ({
    restoList:state.restorentReducer.restoList,
    loading: state.restorentReducer.loading,
    error:   state.restorentReducer.error,
})

const mapDispatchToProps = dispatch => ({
    restorentListHandler : data => dispatch(restoListAction(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(RestorantList);