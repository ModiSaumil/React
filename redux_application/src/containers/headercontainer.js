import { connect } from "react-redux";
// import { addtocart } from "../services/actions/actions";
import Header from "../components/header";

const mapStateToProps = (state) => ({
    carddata: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({
    // addToCart: (data) => dispatch(addtocart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Home;