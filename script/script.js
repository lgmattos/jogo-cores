const cores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
let coresAleatorias = getRandom();
let corVencedora = cores[getCorVencedora(coresAleatorias.length-1)];
var button = document.querySelector("button");
// document.querySelector("#corSelecionada").innerHTML = corVencedora;
document.querySelector("#cores").innerHTML = getNameColors();

console.log(corVencedora)

function getRandom(){
    let valores = [];
    for(let i = 0; i<10; i++){
        let corSorteada = Math.floor(Math.random() * cores.length-1);
        if(!valores.includes(corSorteada) || corSorteada >= 0){

            valores.push(corSorteada);
        }
    }
    return valores;
}

function getNameColors(){
    let returnCores = [];
    coresAleatorias.forEach(function(name, i){
        returnCores.push(" "+cores[i]);
   });
   return returnCores;
}

function getCorVencedora(max){
    
    return Math.floor(Math.random() * max)
}

button.onclick = function(){
    resposta = document.querySelector("#resposta");
    conferirResultado(resposta.value);
}

function conferirResultado(result){
    if(result.toLowerCase() == corVencedora.toLowerCase()){
        alert("Parabéns você acertou!");
        document.body.style.backgroundColor = corVencedora;
    }else{
        alert("Errou burro");
    }
}

