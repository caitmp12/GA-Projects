
const characterNums = [346, 659, 332, 149, 107, 313]

const idNum = () => {
    for (let i=0; i<characterNums.length; i++){
        
    }
}

$.ajax({
    url: 'https://www.superheroapi.com/api.php/10218014924347774/346'
}).then(
    (data) => {
        console.log(data)
        console.log(data.biography["full-name"])
        $("#iron-name").html(data.name)
        $("#iron-full-name").append(data.biography["full-name"])
    },
    () => {
        console.log("bad")
    }
)