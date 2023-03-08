function showElements(element) {
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
        let tableChild = children[i];
        tableChild.classList.remove("d-none")
    }
}

function hideElements(element) {
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
        let tableChild = children[i];
        tableChild.classList.add("d-none")
    }
}