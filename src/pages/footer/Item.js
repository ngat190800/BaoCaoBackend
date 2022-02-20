import React, { Component } from 'react';
import './Item.css';
class ItemFooter extends Component {
    render() {
        const { itemFooter } = this.props;
        return (
            <div className="row fruits">
                {itemFooter.map(itemFooter => {
                    return (
                        <p className="col-6 col-xl-2  col-lg-2 col-md-2 col-sm-2 table-fruits">
                                <img className="footer-img" src={itemFooter.img}/>
                                <br/>
                                <b className="extend" key={itemFooter.id}>{itemFooter.title}</b>
                                <p key={itemFooter.id}>{itemFooter.content1}</p>
                                <p key={itemFooter.id}>{itemFooter.content2}</p>
                                <p key={itemFooter.id}>{itemFooter.content3}</p>
                                <p key={itemFooter.id}>{itemFooter.content4}</p>
                                <p key={itemFooter.id}>{itemFooter.content5}</p>
                            {/* </div> */}
                        </p>
                    );
                })}
            </div>
        );
    }
}
export default ItemFooter;