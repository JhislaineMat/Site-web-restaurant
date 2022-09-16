
//nombre d'article
let nbreArticle = 0;
let nomP = document.getElementById('nomp')
let market = document.getElementById('market');
function ajouterArt(){
    nbreArticle++;
    let article = document.getElementById('elt');
    article.innerHTML = nbreArticle;
    let li = document.createElement('li');
    li.innerHTML = nomP.textContent+'<br><i class=" fa fa-minus" id="moins" style="padding :10px;"></i>' +nbreArticle+'<i id="plus" style="padding :10px;" class="fa fa-plus"></i>';
    market.appendChild(li)
}





