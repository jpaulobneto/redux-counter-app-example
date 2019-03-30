import { connect } from "react-redux";
import { CounterApp as Component } from "../../components/CounterApp/CounterApp";
import { increment, decrement } from "./ActionCreators";

const mapStateToProps = state => ({
    value: state.counter
});

const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => dispatch(increment(2)),
  onDecrementClick: () => dispatch(decrement(2)),
});

export const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
