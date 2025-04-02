const mainContainer = document.querySelector("#root");

function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type);
    for (let e in reactElement.props) {
        domElement.setAttribute(e, reactElement.props[e])
    }
    domElement.innerHTML = reactElement.children;
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : "https://www.google.com",
        target : "_blank",
    },
    children : "click me to go to google.com"
};


customRender(reactElement, mainContainer);

// console.log(Object.getOwnPropertyDescriptor(reactElement, "props"))