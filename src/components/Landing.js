import React, { Component } from "react";
import banner from '../assets/images/colin-meg-P4obKjGSZAQ-unsplash.jpg';
import logo from '../assets/images/werk.svg';

class Landing extends Component {
    render() {
        return (
            <>
                <div class="container landing">

                    <div class="top-section d-flex">
                        <div class="left">
                        </div>
                        <div class="right">
                            <p><span class="tag"> Data driven creative</span></p>

                            <div class="title">
                                <span class="title-first-half">Crafting human conncetion </span>
                                <span class="title-second-half"> through digital experience</span>
                            </div>

                            <div class="description">
                                <span class="desc-first-half">Werk is a strategic design agency powered by data </span>
                                <span class="desc-second-half">analytics, market research and digital technology.</span> <br/>
                                    <button class="button-talk">Let's talk</button>
                            </div>
                        </div>
                    </div>

                    <div class="landing-image">
                        <img src={banner} alt="landing_img" />
                    </div>
                </div>

                <footer class="container footer">
                        <hr/>
                        <div class="footer-content d-flex flex-row justify-content-center">
                            <img class="m-3" src={logo} width="50px" height="auto" alt="" srcset=""/>
                            <p class="mt-3">© 2022 Werk</p>
                        </div>

                </footer>
            </>
        );
    }
}

export default Landing;