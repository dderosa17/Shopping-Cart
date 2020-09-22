import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { defaultData } from '../../core/defaultData';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/actions/cart';


class TheStore extends React.Component {
    constructor(props) {
        super(props)
    }
    addToCartHandler(elem) {

        this.props.dispatch({ type: "ADD_TO_CART", payload: elem })
    }

    incrementQuantity() {

        this.props.dispatch({type:"INCREMENT_TO_QUANTITY"});

    }

    decrementQuantity() {

        this.props.dispatch({type:"DECREMENT_TO_QUANTITY"});

    }

    render() {
        console.log("second",this.props)
        return (
            <div>
                <div className="header">
                    <div>
                        <h1 className="title">For Freedom Store</h1>
                    </div>
                    <div className="input-div">
                        <div>{this.props.state.counter}</div>
                    </div>
                    <div className="cart">
                        <Link to="/Cart"><i className="fas fa-shopping-cart fa-2x" id="color-cart" ></i></Link>
                    </div>
                </div>
                <div className="container-store">
                    <div className="store">
                        {
                            defaultData.map(elem => {
                                return <div className='box' key={elem.key}>
                                    <img className="t-shirt" src={elem.data} />
                                    <i className="fas fa-plus-circle fa-2x" id="add-to-cart" onClick={(e) => { this.addToCartHandler(elem) }} />
                                    <i class="fas fa-angle-up" id="add-shirt" onClick={(e) => { this.incrementQuantity() }}></i>
                                    <i class="fas fa-angle-down" id="remove-shirt" onClick={(e) => { this.decrementQuantity() }}></i>
                                    <p className="price">{elem.price}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log("this :", state)
    return {
        state
    }

};



export default connect(mapStateToProps)(TheStore) 