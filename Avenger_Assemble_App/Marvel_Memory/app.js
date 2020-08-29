
$.ajax({
    url:'https://www.superheroapi.com/api.php/10218014924347774/346'
}).then(
    (data)=> {
        console.log(data)
        console.log(data.biograhy)
        $("#iron-name").html(data.name)
        $("#full-name").html(data.biography.fullname)
    }, 
    ()=>{
        console.log("bad")
    }
)





////Game Logic

// $("#loki-pic").on("mouseover", () => {
//     alert("loki is talking")
// })

// const split = () => {

// }

// const turnover = () => {

// }

// const combine = () => {

// }

// const assemble = () => {

// }



////on.hover over loki, a text bubble appears, prompting the game. He asks, "Hey you - want to see something fun?"

//choice===yes, the Avenger cards double

//one of each Avenger has their pic, their name, but that's it. 
//the other card has their powers

//the cards turn around

//Loki text bubble pops up, "What's the matter? You didn't like my trick? But just look at Banner! He's all weak and helpless. It's delightful. No? Well fine. Then you put them back together again. Match the card with their power. Drag one card to the other, and they'll reassemble, good as new."

//on.click for each card, the card turns over. 
//on.hold down click and drag, if they're a match, you can drag one card over to the other to "re-assemble". 

//once card becomes one again, the Avenger moves off the playing field to await the rest of the team. 

//Once "assembled" area contains six cards, you've won the game. 





//////////////////////////Cut Code/////////////////////////////////

// $.ajax({
//     url: 'https://www.superheroapi.com/api.php/10218014924347774/346',
//     success: (data) => {
//         console.log(data)

//     },
//     error: () => {
//         console.log("bad request")
//     }
// })