
import React from "react";


function Items() {
    const todos = [{
        title: "go to gym",
        done: false
    }, {
        title: "go to college",
        done: true
    }]

    const todoComponents=todos.map(todo=><Todo title={todo.title} done={todo.done}/>)

    return (<div>
        {todoComponents}
    </div>)
}

function Todo({title,done}){
    return <div>
        {title} - {done?"done":"not done"}
    </div>
}

export default Items
