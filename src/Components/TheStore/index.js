import React from 'react'
import './style.css'
class TheStore extends React.Component {


    render() {
        return (
            <div>
                <div className="header">
                    <div>
                        <h1 class="title">For Freedom Store</h1>
                    </div>
                    <div className="input-div">
                        <input type="text" className="input-fild"></input>
                    </div>
                    <div class="cart">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                </div>
                <div className="container-store">
                    <div className="store">
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TheStore