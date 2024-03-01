let card = document.querySelector(".card-pokemon")
let preview = document.querySelector(".preview")

document.querySelectorAll("conteudo").forEach(card => {
    card.onclick = () => {
        card.style.display = "flex"
        let pokemon = card.getAttribute("data-pokemon")
        preview.forEach(prev => {
            let target = prev.getAttribute("data-target")
            if (pokemon == target) {
                prev.classList.add("active")
            }
        })
    }
})


//fecha o modal
let classCard = document.querySelector(".preview")

let close = document.querySelector(".return").onclick = () => {
    classCard.classList.remove("active")
    card.style.display = "none"
}



// let card = document.querySelector(".card-pokemon")
// let preview = document.querySelector(".preview")

// document.querySelectorAll("conteudo").forEach(card => {
//     card.onclick = () => {
//         card.style.display = "flex"
//         let pokemon = card.getAttribute("data-pokemon")
//         preview.forEach(prev => {
//             let target = prev.getAttribute("data-target")
//             if (pokemon == target) {
//                 prev.classList.add("active")
//             }
//         })
//     }
// })


// preview.forEach(close => {
//     close.querySelector("conteudo").onclick = () => {
//         close.classList.remove("active")
//         card.style.display = "none"
//     }
// })