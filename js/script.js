const url = "https://kep.uz/api/problems"
var Arr = [];
async function draw(){
    const response = await fetch(url);
    const data =  await response.json();
    for(var a of data.data){
        var obj = {
            id: a.id,
            title: a.title,
            tags: a.tags,
            difficulty: a.difficulty,
            rating: a.rating,
            solved: a.solved
        }
        Arr.push(obj)
        inner()
        console.log(Arr)
       }
}
draw()


function inner(){
    var tr = ""
    for (var td of Arr){
        tr +=   "<tr>"+
                    "<td>" + td.id +"</td>" +
                    "<td>" + td.title +"</td>" +
                    "<td>" + td.tags +"</td>" +
                    "<td>" + td.difficulty +"</td>" +
                    "<td>" + td.rating +"</td>" +
                    "<td>" + td.solved +"</td>" +
                "</tr>"
    }
    document.getElementById("tbody").innerHTML = tr
}