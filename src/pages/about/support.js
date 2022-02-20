import React, { Component } from 'react';
import './support.css'
class Support extends Component {
    render() {
        const { supports } = this.props;
        return (
            <div className="itemSupport">
                {supports.map(support => {
                    return (
                        <div className="img-support">
                            <img  src={support.image} />
                            <div className="content1-support">{support.title}</div>
                            <div className="content2-support">{support.describe}</div>
                        </div>
                    );
                })}
            </div>

        );
    }
}
export default Support;