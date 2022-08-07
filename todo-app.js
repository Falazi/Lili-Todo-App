create("h1", "Todo List")


create("div", "", "input-line")

create("input", "", "input", "#input-line")

setAttr("#input", { "type": "text", "class": "my-class", "autocomplete": "off", "placeholder": "Todo" });

create("Button", "Add", "btn", "#input-line")




onEvent("#btn", "click", addTodo)



let num = 1

function addTodo() {


    if (select("#input").value) {

        let todoId = `todo-${num}`
        let textId = `text-${num}`
        let rbtnId = `rbtn-${num}`
        let rimgId = `rimg-${num}`

        let ebtnId = `ebtn-${num}`
        let eimgId = `eimg-${num}`

        let checkId = `check-${num}`

        create("div", "", todoId,)
        setAttr(`#${todoId}`, { "class": "todoitem" })

        create("input", "", checkId, `#${todoId}`)

        setAttr(`#${checkId}`, { "type": "checkbox" })



        create("p", select("input").value, `${textId}`, `#${todoId}`)

        /* dunno if i need this
        create("button", "", `${ebtnId}`, `#${todoId}`, "edit-btn")
    
        create("img", "", `${eimgId}`, `#${ebtnId}`)
    
        set(`#${eimgId}`, { "class": "edit-btn" })
    
        set(`#${eimgId}`, { "src": "icons/pen-to-square-solid.svg", "aria-hidden": "true" })
    
    */

        create("button", "", rbtnId, `#${todoId}`, "remove-btn")

        create("img", "", rimgId, `#${rbtnId}`)
        setAttr(`#${rimgId}`, { "class": "remove-btn", })

        setAttr(`#${rimgId}`, { "src": "icons/xmark-solid.svg", "aria-hidden": "true", "height": "20px", "width": "20px" })

        onEvent(`#${rbtnId}`, "click", removeTodo)


        setAttr(`#${textId}`, { "contentEditable": "true" })

        onEvent(`#${textId}`, "keydown", enpre)

        function enpre(event) {
            if (event.keyCode == 13) {
                let text = select(`#${textId}`)
                text.blur()
            }
        };



        function removeTodo() {
            remove(`#${todoId}`)
        }

        select("input").value = ""

        console.log("hi")

        num = num + 1

        onEvent(`#${checkId}`, "change", checkCheckbox)


        function checkCheckbox() {

            toggleClass(`#${textId}`, "strike")

            if (this.checked) {
                setAttr(`#${textId}`, { "contenteditable": "false" })
            }
            else {
                setAttr(`#${textId}`, { "contenteditable": "true" })

            }

        }

    }
}

// onEvent("#input", "keypress", ePressed)

onEvent("#input", "keyup", enterPress)

function enterPress(event) {
    if (event.keyCode === 13) {
        addTodo()
    }
};


