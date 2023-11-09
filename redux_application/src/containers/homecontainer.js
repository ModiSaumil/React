import { connect } from "react-redux";
import { addtocart,removetocart } from "../services/actions/actions";
import Home from "../components/home";

const mapStateToProps = (state) => ({
    carddata: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (data) => dispatch(addtocart(data)),
    removetocart:(data) => dispatch(removetocart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;