var converter = new showdown.Converter();

function append(html) {
    let myDiv = document.createElement("div");
    myDiv.innerHTML = html
    document.body.appendChild(myDiv);
}

function markdown(text) {
    let convText = converter.makeHtml(text);
    append(convText)
}


function title(text) {
    append(`<h1>${text}</h1>`)
}

function header(text) {
    append(`<h2>${text}</h2>`)
}


function subheader(text) {
    append(`<h3>${text}</h3>`)
}

function button(text) {
    let id = "button-" + randNum();
    append(`<button id=${id} type="button">${text}</button>`)



    // below is not working properly, i'll have to change it
    // button event listener
    const button = document.getElementById(id);
    button.onclick = function () { buttonOnclick() };

    let buttonClicked = false

    function buttonOnclick() {
        buttonClicked = true
    }
    if (buttonClicked === true) {
        return true
    }

}

function randNum() {
    return Math.floor(Math.random() * 100)
}


function radio(label, options) {

    let ranSlect = randNum()

    let selection = null

    let choices = options.join();

    choices = choices.split(", ");

    console.log(choices);

    append(`<label>${label}</label>`);

    choices.forEach(function (option, i) {
        append(`
        <input type='radio' id=${option} name=${ranSlect} value='${option}'>
        <label for='${option}'>${option}</label>
      
          `);
    });

    ;

}
