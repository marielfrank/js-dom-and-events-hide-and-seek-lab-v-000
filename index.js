function getFirstSelector(selector) {
    return document.querySelector(selector);
}
function nestedTarget() {
    return document.getElementById('nested').getElementsByClassName('target')[0];
}
function deepestChild() {
    const grandNodeDivs = document.getElementById('grand-node').querySelectorAll('div');
    return grandNodeDivs[grandNodeDivs.length - 1];
}

function increaseRankBy(n) {
    const ranked = document.getElementsByClassName('ranked-list');
    for (let i = 0; i < ranked.length; i++) {
        ranked[i].innerHTML = parseInt(ranked[i]) + 1;
    }
}