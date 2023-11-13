import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://1.bp.blogspot.com/-SjrvxDHEecg/X4lF619JouI/AAAAAAAAAJA/KwBXQ6fgJJMDD0TQdEzcUT8jX-7VYtDEACNcBGAsYHQ/s901/lemon.png" alt="lemon"></img>
                </div>
                <p className="product-title">Lemon segar warna Kuning</p>
                <p className="product-price">42.000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)} onChangeMinus={(value) => this.props.onChangeMinus(value)} />
            </div>
        );
    }
}

export default CardProduct;