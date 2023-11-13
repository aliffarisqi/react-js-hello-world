import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css'
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../context/context';
//import { RootContext } from '../../Home/Home';

class Product extends Component {
    // state = {
    //     order: 0
    // }
    // handleCountChange = (newValue) => {
    //     this.setState({
    //         order: this.state.order + 1
    //     })
    // }
    // handleCounterChangeMinus = (newValue) => {
    //     this.setState({
    //         order: this.state.order - 1
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p className="section-title">Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://1.bp.blogspot.com/-h3rPZkUoFu4/X4lF6p1uCNI/AAAAAAAAAI8/1VI0Ih1WPzo34BPrQy0RJyFgexUT4PhuACNcBGAsYHQ/w640-h534/mobil.png" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="https://1.bp.blogspot.com/-3I5r0djHeAQ/X4lFtUh3QWI/AAAAAAAAAIk/VB7YDhMg5yA15W7oFVjrT4QWrM7tPeT1wCNcBGAsYHQ/w640-h534/becak.png" alt="troley" />

                        {/* state management menggunakan redux */}
                        {/* <div className="count">{this.props.order}</div> */}

                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                {/* <CardProduct onCounterChange={(value) => this.handleCountChange(value)}
                    onChangeMinus={(value) => this.handleCounterChangeMinus(value)} /> */}
                {/* <CardProduct onCounterChange={(value) => this.handleCountChange(value)}
                    onChangeMinus={(value) => this.handleCounterChangeMinus(value)} />
                <CardProduct onCounterChange={(value) => this.handleCountChange(value)}
                    onChangeMinus={(value) => this.handleCounterChangeMinus(value)} />
                <CardProduct onCounterChange={(value) => this.handleCountChange(value)}
                    onChangeMinus={(value) => this.handleCounterChangeMinus(value)} /> */}

                <CardProduct />
            </Fragment>

        );
    }
}


//state management menggunakan redux
// const mapStateToProp = state => {
//     return {
//         order: state.totalOrder
//     }
// }
// export default connect(mapStateToProp)(Product);


//state management menggunakan context
export default GlobalConsumer(Product);