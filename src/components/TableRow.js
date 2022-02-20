import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/products/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.detail}
                </td>
                <td>
                    {this.props.obj.cost}
                </td>
                <td>
                    {this.props.obj.unit}
                </td>
                <td>
                    {this.props.obj.classify}
                </td>
                <td>
                    {this.props.obj.amount}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;