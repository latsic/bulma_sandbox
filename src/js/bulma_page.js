
import {printMe1, printMe2} from './print.js';

export function addButtons(){

    let bulmaPage = document.querySelector(".bulma-page");

    let div = document.createElement("div");
    div.classList.add("block");
    div.id = "buttons";
    
    bulmaPage.appendChild(div);

    let ex = document.createElement("div");
    ex.classList.add("examples");
    div.appendChild(ex);

    let divLeft = document.createElement("div");
    let divRight = document.createElement("div");
    ex.appendChild(divLeft);
    ex.appendChild(divRight);

    ex.style.display = "flex";
    ex.style.justifyContent = "space-between";

    let button1 = document.createElement("button");
    let textElem1 = document.createTextNode("button");
    button1.appendChild(textElem1);
    button1.classList.add("button");
    button1.classList.add("is-black");
    
    divLeft.appendChild(button1);

    let button2 = document.createElement("button");
    let textElem2 = document.createTextNode("button");
    button2.appendChild(textElem2);
    button2.classList.add("button");
    button2.classList.add("is-link");

    // Adding a whitespace node to make it look
    // equal to the elements added directly in the html.
    let whiteSpaceNode = document.createTextNode(" ");
    divLeft.appendChild(whiteSpaceNode);

    divLeft.appendChild(button2);

    {
        let p = document.createElement("p");
        p.className = "myP";
        let textElem = document.createTextNode("not yetT");
        p.appendChild(textElem);
        //p.style.outline = "1px solid red";
        divRight.appendChild(p);
        divRight.style.marginRight = "3rem";
        //divRight.style.outline = "1px solid green";
        divRight.style.display = "flex";
        divRight.style.alignItems = "center";


        button1.addEventListener("click", () => {
            printMe1(document.querySelector(".myP"));
        });
        button2.addEventListener("click", () => {
            printMe2(document.querySelector(".myP"));
        });
    }

    console.log("added buttons");
}

export function removeButtons()
{
    let buttonsDiv = document.querySelector("#buttons");
    if(buttonsDiv){
        buttonsDiv.remove();
        console.log("removed buttons");
    }
}

if (process.env.NODE_ENV !== 'production') {

    if (module.hot) {
        module.hot.accept('./print.js', function() {
            console.log('Accepting the updated printMe module!');
        });
    }
}