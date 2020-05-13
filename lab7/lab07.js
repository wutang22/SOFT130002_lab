const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
//父节点
let parentNode = document.querySelectorAll(".flex-container")[0];

function creatSingle(i) {
    let childNode = document.createElement("div");
    childNode.setAttribute("class","item");

    let html = "<h4>Genre:"+works[i].tips+"</h4>\n" +
        "        <div class=\"inner-box\" >\n" +
        "            <h3 style=\"display:inline\">"+works[i].author+"</h3>\n" +
        "            <h5 style=\"display:inline;font-weight: bold;margin-left: 1em\">lifetime:"+works[i].lifetime+"</h5>\n" +
        "        </div>\n" +
        "        <div class=\"inner-box\">\n" +
        "            <h3>Popular Photos</h3>\n" ;
    for(let photo of works[i].photos){
        html+="            <img src=\""+photo+"\" alt=\"img\" class=\"photo\">\n" ;
    }
    html+="        </div>\n" +
        "        <button style=\"margin-top: 1em\">Visit</button>";
    childNode.innerHTML = html;
    parentNode.appendChild(childNode);
}

function creatAll(){
    for(let i =0;i<works.length;i++){
        creatSingle(i);
    }
}

creatAll();