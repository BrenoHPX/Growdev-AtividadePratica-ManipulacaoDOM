function action(){
    const nome = prompt("Digite seu nome:");
    window.document.querySelector("p").innerText=`E aí ${nome}! Você está deixando o seu site dinâmico.`;
}