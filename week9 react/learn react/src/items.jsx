
import React from "react";

// in lists ,keys are important or else console will how an error

function Items() {
    const todos = [{
        id:1,
        title: "go to gym",
        done: false
    }, {
        id:2,
        title: "go to college",
        done: true
    }]

    const todoComponents=todos.map(todo=><Todo key={todo.id} title={todo.title} done={todo.done}/>)

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
