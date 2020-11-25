import { element } from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { defaultData } from '../../core/defaultData'

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        var accumula;
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
                <div style={{
                    display: "flex", height: "330px", width: "16%", flexDirection: "column",
                    marginLeft: "auto", marginRight: "2%", marginTop: "2%",
                    backgroundColor: "#383538", color: "white", fontSize: "25px"
                }}>
                    <p style={{ marginLeft: "5%" }}>Items</p>
                    <div style={{ display: "flex", flexDirection: "column", height: "200px", width: "120px", marginLeft: "10%", marginTop: "2%", position: "absolute", color: "white", fontSize: "25px" }}>
                        {/* {this.props.state.price.map(elem => {
                            return <div style={{ height: "auto", width: "auto", marginTop: "2%", marginLeft: "30px" }}>chf {elem}</div>
                        })

                        } */}
                    </div>
                    <p style={{ marginLeft: "10px", marginTop: "60%" }}>Total price chf</p>
                    <div style={{ height: "40px", width: "90px", position: "absolute", marginLeft: "10.5%", marginTop: "13.6%", backgroundColor: "white", color: "black", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {
                            this.props.state.price
                        }
                    </div>
                </div>
                <div className="container-store">
                    <div className="store">
                        {
                            this.props.state.cart.length > 0 &&
                            this.props.state.cart.map(elem => {
                                return <div className='box' key={elem.key}>
                                    <img className="t-shirt" src={elem.data} alt="" />
                                    <p className="price">{elem.price}</p>
                                    {

                                    }
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