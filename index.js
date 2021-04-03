// First javascript file

document.getElementById("introduction").style.color = 'red'

document.getElementById("logo").addEventListener("mouseover", hoverhello)
document.getElementById("logo").addEventListener("mouseleave", hovergoodbye)

function hoverhello() {
    document.getElementById("introduction").style.color = 'green'
}

function hovergoodbye() {
    document.getElementById("introduction").style.color = 'black'
}