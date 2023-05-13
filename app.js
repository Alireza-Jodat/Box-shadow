oninput = change
onload = change
function change() {
    const vertical = document.querySelector(".vertical").value
    const horizontal = document.querySelector(".horizontal").value
    const blur = document.querySelector(".blur").value
    const color = document.querySelector(".color").value
    document.querySelector(".span_vertical").innerHTML = vertical
    document.querySelector(".span_horizontal").innerHTML = horizontal
    document.querySelector(".span_blur").innerHTML = blur
    document.querySelector(".span_color").innerHTML = color
    document.querySelector(".shadow").style.boxShadow = `${vertical}px ${horizontal}px ${blur}px ${color}`
}