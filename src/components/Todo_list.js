import React, { Component } from 'react'
import TodoItem from "./Todo_item"

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props
        return (
            <div className="container">
                <h1>To Do List</h1>
               { items.map(it=> 
               <TodoItem 
                item={it} 
                handleDelete={()=>handleDelete(it.id)}
                handleEdit={()=>handleEdit(it.id)}
                />) }


                <button className="btn btn-danger btn-block my-3" type="submit" onClick={clearList}> 
                Clear List
                </button>
            </div>
        )
    }
}
