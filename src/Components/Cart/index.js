import React from 'react'
import { connect } from 'react-redux'
import { defaultData } from '../../core/defaultData'

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="header">
                    <div>
                        <h1 class="title">For Freedom Store</h1>
                    </div>
                    <div className="input-div">
                        
                    </div>
                    <div class="cart">
                        <i class="fas fa-shopping-cart fa-2x"></i>
                    </div>
                </div>
                <div className="container-store">
                    <div className="store">
                        {
                            this.props.state && this.props.state.cart.length > 0 &&
                            this.props.state.cart.map(elem => {
                                console.log("print element" + elem)
                                return <div className='box' key={elem.key}>
                                    <img className="t-shirt" src={elem.data} alt="" />
                                    <p className="price">{elem.price}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </>

        )
    }
}

const mapStateToProps = (state) => ({

    state: state
})

export default connect(mapStateToProps)(Cart)