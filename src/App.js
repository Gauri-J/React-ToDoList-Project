import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from 'react-uuid'
import TodoInput from "./components/Todo_input"
import TodoList from "./components/Todo_list"

class App extends React.Component {
state={
    item:"",  id:uuid(), items:[], edititem:false
  }

HandleSubmit(e){
    e.preventDefault()
    const {items, item, id}= this.state
    const newitem ={id:id, title:item}
    const newitems=[...items, newitem]
    this.setState({
      items: newitems,
      item:"",
      id:uuid()
    })
    console.log("items:", items)
}
//to make item input box editable
HandleChange = (e)=> {
  this.setState({
    item: e.target.value
      })
}

ClearList=(e)=>{
  this.setState({
    items:[]
  })
}
 
handleDelete=(id)=>{
  const filteredItems = this.state.items.filter(
    item=> item.id !== id
  )
  console.log(filteredItems)
  this.setState({
    items: filteredItems
  })
}

handleEdit=(id)=>{
  const filteredItems = this.state.items.filter(
    item=> item.id !== id
  )
  const editItem = this.state.items.find(item=> item.id===id)
    //edititem={id:4125236, title:'sggg'}
    this.setState({
      items: filteredItems,
      item:editItem.title,
      edititem:true
  })
}

  render(){
    return (
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-10">
          <TodoInput 
          item={this.state.item} edititem={this.state.edititem}
          HandleChange={this.HandleChange}
          HandleSubmit={(e)=> this.HandleSubmit(e)}
          />
          <TodoList items={this.state.items}  
            clearList={this.ClearList} 
            handleDelete={this.handleDelete} handleEdit={this.handleEdit}
          />
         
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
