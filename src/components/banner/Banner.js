import React from 'react';
import './Banner.css';
class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="content-banner cart">
                    Japan</div>
                    <div className="deatil-content">
                        <p>HOME</p>
                        <li>BLOG</li>
                        <li>GALLERY</li>
                        <li>Japan</li>
                    </div>
                </div>
            </div>
        );
    }
}
export default Banner;