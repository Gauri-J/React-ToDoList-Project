import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {item, handleDelete, handleEdit } = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between">
                <p>{item.title}</p>
                    <div >
                        <span className="mx-2 text-success" onClick={handleEdit}><i className="fas fa-pencil-alt"></i></span>
                        
                        <span className="mx-2 text-danger" onClick={handleDelete}><i className="fas fa-trash-alt"></i></span>
                    </div>
                    
            </li>
            
        )
    }
}
