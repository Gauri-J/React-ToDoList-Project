import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, HandleChange, HandleSubmit, edititem} = this.props
        return (
        <div>
            <h1>To Do Input</h1>
            <div className="card card-body my-4">
           <form onSubmit={HandleSubmit}>
             <div className="input-group ">
                <div className="input-group-text bg-primary text-white">
                   <i className="fas fa-book"></i>
                </div>
                <input type="text" className="form-control" placeholder="Add an item" value={item} onChange={HandleChange}/>
             </div>
             
             <button 
             className= {edititem ? "btn btn-success btn-block my-3"  : "btn btn-primary btn-block my-3" }
             type="submit">
               { edititem ? 'Edit Item' : 'Add Item' }
               </button>
            </form> 
          </div>

        </div>
        

        )
    }
}
