import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../../context/context';
import ActionType from '../../../../redux/reducer/globalActionType';
//import { RootContext } from '../../../Home/Home'

class Counter extends Component {
    // state = {
    //     order: 0
    // }
    // handleCounterChange = (value) => {
    //     this.props.onCounterChange(value);
    // }
    // handleCounterChangeMinus = (value) => {
    //     this.props.onChangeMinus(value);
    // }
    // handleMinus = () => {
    //     if (this.state.order == 0) {
    //         this.setState({
    //             order: this.state.order
    //         })
    //         alert('you dont have product');
    //     }
    //     else {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChangeMinus(this.state.order);
    //         })
    //     }

    // }
    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

    // }



    //penulisan state management menggunakan redux
    // render() {
    //     console.log(this.props);
    //     return (
    //         <div className="counter">
    //             <button className="minus" onClick={this.props.handleMinus}>-</button>
    //             <input className="inpute" type="text" value={this.props.orderCuy} />
    //             <button className="plus" onClick={this.props.handlePlus}>+</button>
    //         </div>
    //     )
    // }

    //penulisan state managemnt mengunakan context
    render() {
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                <input className="inpute" type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
            </div>
        )
    }
}

//state management menggunakan redux
// const mapStateToProps = (state) => {
//     return {
//         orderCuy: state.totalOrder
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//         handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);