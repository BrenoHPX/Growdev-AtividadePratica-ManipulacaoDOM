let cliques = 1;

function incrementar (){
    let tagP=window.document.querySelector("p");
    tagP.innerHTML=`O contador está com ${cliques} cliques.`;
    cliques++;
}

function zerar (){
    let tagP=window.document.querySelector("p");
    tagP.innerText=`contador zerado!`;
    cliques=1;
}