import React from 'react';
import Carousel from './Carousel'
const Public = (props) => (
    <div className="app">
        <div className="login-wrapper row m-0">
            <div className="col-lg-7 hidden-md-down login-bg  m-0 p-0">
                <div className="bg-pic">
                    <Carousel/>
                </div>

            </div>
            <div className="col-lg-5 login-block m-0 p-0">
                <div className="text-center logo">
                    <img src="/img/logo.png" alt="" className="img-fluid"/>
                </div>
                <div className="mb-3">
                    {props.children}
                </div>
                <div className="login-footer text-center">
                    <p>
                        &copy; 2017 The Openmarket Europe Ltd All right reserved.
                    </p>
                </div>
            </div>
        </div>

    </div>
)

export default Public;
