
////Variables and Arrays

const characters = [{id: 346, key: "iron"}, {id: 659, key: "thor"}, {id: 332, key: "hulk"}, {id: 149, key: "cap"}, {id: 107, key: "widow"}, {id: 313, key: "hawkeye"}]
    //  659, 332, 149, 107, 313]

const idArr = ["#iron-man", "#thor", "#hulk", "#cap", "#black-widow", "#hawkeye"]


///Funcs

const idNum = () => {
    
        //For Each loop through the objects of the characters array
        characters.forEach(function(character){
            //call on the API for data
            $.ajax({
                url: `https://www.superheroapi.com/api.php/10218014924347774/${character.id}`
            }).then(
                (data) => {
                    //For loop to loop through the properties of the object
                    for (const property in data) {
                        //assigning corresponding HTML tag with current property 
                        const tag = $(`#${character.key}-${property}`)
                        //retrieving content
                        const content = data[property]
                        //updating the HTML with content retrieved from the API
                        tag.html(content)

                    }

                },
                () => {
                    console.log("bad")
                }
            )
        })

}

idNum()

$(".grid-item").draggable()



const cloneCards = () => {
    for (let i = 0; i < idArr.length; i++){
        const $powerDiv = $(`${idArr[i]}`)
        $().clone().appendTo(".grid-container")
    }
}


$("#loki-pic").on("click", () => {
    const choice = prompt("Wanna see a fun trick?", "yes / I guess")
    if (choice === "yes") {
        cloneCards()
    } else if (choice === "I guess") {
        cloneCards()
    }
})








///////////////////Code Graveyard///////////////////////////

// const characterNums = [346, 659, 332, 149, 107, 313]

// const idNum = () => {
//     for (let i = 0; i < characterNums.length; i++){  
//       return characterNums[i]  
//     }
// }

// idNum()

// $.ajax({
//     url: `https://www.superheroapi.com/api.php/10218014924347774/346`
// }).then(
//     (data) => {
//         console.log(data)
//         console.log(data.biography["full-name"])
//         $("#iron-name").html(data.name)
//         $("#iron-full-name").append(data.biography["full-name"])
//     },
//     () => {
//         console.log("bad")
//     }
// )



////Variables

// const memoryArr = ["Iron Man", "Thor", "The Hulk", "Captain America", "Black Widow", "Hawkeye"];

// const memoryValues = [];

// const cardsFlipped = 0;

// const idArr = ["#iron-man", "#thor", "#hulk", "#cap", "#black-widow", "#hawkeye"]


////Game Logic


// const flipCards = () => {
//     for (let i = 0; i < idArr.length; i++) {
//         console.log("loop is working")
//     }    
// }

// const cloneCards = () => {
//     for (let i = 0; i < idArr.length; i++){
//         $(`${idArr[i]}`).clone().appendTo(".grid-container")
//     }
// flipCards()
// }



// $("#loki-pic").on("click", () => {
//     const choice = prompt("Wanna see a fun trick?", "yes / I guess")
//     if (choice === "yes") {
//         cloneCards()
//     } else if (choice === "I guess") {
//         cloneCards()
//     }
// })

