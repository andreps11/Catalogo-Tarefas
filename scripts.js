function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
    
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

// function click() {
//     document
//         .querySelector(".atividade")
//         .classList
//         .toggle("concluded ")
//     document.getElementsByTagName(".atividade")[0].style.backgroundColor = "yellow";
// }