
create("h1", "Todo List")

create("input", "", "input")

set("#input", { "type": "text", "class": "my-class" });

create("Button", "Add", "btn")




onEvent("#btn", "click", cool)



let num = 1

function cool() {


    let todoId = `todo-${num}`
    let textId = `text-${num}`
    let rbtnId = `rbtn-${num}`
    let rimgId = `rimg-${num}`

    let ebtnId = `ebtn-${num}`
    let eimgId = `eimg-${num}`

    let checkId = `check-${num}`

    create("div", "", todoId,)
    set(`#${todoId}`, { "class": "todoitem" })

    create("input", "", checkId, `#${todoId}`)

    set(`#${checkId}`, { "type": "checkbox" })

    create("p", select("input").value, `${textId}`, `#${todoId}`)

    /* dunno if i need this
    create("button", "", `${ebtnId}`, `#${todoId}`, "edit-btn")

    create("img", "", `${eimgId}`, `#${ebtnId}`)

    set(`#${eimgId}`, { "class": "edit-btn" })

    set(`#${eimgId}`, { "src": "icons/pen-to-square-solid.svg", "aria-hidden": "true" })

*/
    create("button", "", rbtnId, `#${todoId}`, "remove-btn")

    create("img", "", rimgId, `#${rbtnId}`)
    set(`#${rimgId}`, { "class": "remove-btn" })

    set(`#${rimgId}`, { "src": "icons/xmark-solid.svg", "aria-hidden": "true", "height": "20px", "width": "20px" })

    onEvent(`#${rbtnId}`, "click", removeTodo)


    onEvent(`#${textId}`, "click", editTodo)



    function editTodo() {
        set(`#${textId}`, { "contentEditable": "true" })

    }


    onEvent(`#${textId}`, "keydown", enpre)

    function enpre(event) {
        if (event.keyCode == 13) {
            select(`#${textId}`).text.blur()
        }
    };



    function removeTodo() {
        remove(`#${todoId}`)
    }

    select("input").value = ""

    console.log("hi")

    num = num + 1

}


// onEvent("#input", "keypress", ePressed)

onEvent("#input", "keyup", enterPress)

function enterPress(event) {
    if (event.keyCode === 13) {
        cool()
    }
};


