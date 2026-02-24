const highScores=JSON.parse(localStorage.getItem("highScores")) || []
const list = document.querySelector("ol")



const content=highScores.map((item , index)=>{
    return `
    <li >
        <span>${index +1}</span>
        <p>
        ${item.name}
        </p>
        <span>${item.score}</span>
    </li>
    `
})
list.innerHTML = content.join("")