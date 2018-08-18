

var remplace = function()
{
    var aTags = document.getElementsByClassName("tweet");
    var found;
    var img;
    var txt;
    var card;

    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i] && !(aTags[i].classList.contains("BetterTwitter")) && isIn(removeDiacritics(aTags[i].textContent.toUpperCase()))) {
        found = aTags[i].getElementsByClassName("content")[0];
        if (found)
        {
            //addImage(found);
            txt = "<strong>Recette du clafouti</strong> <br/>"
            txt += "<br/><strong>Ingredients</strong><br/>"
            txt += "50g de beurre<br/>"
            txt += "30 cl de lait<br/>"
            txt += "80g de farine<br/>"
            txt += "1 pincée de sel<br/>"
            txt += "4 œufs<br/>"
            txt += "60g de sucre<br/>"
            txt += "1 boîte de bigarreaux St Mamet 425g<br/>"

            txt += "<br/><strong>Preparation:</strong><br/>"
            txt += "- Préchauffez le four à 210°C ou Th.7. Battez les oeufs, le sucre et ajoutez une pincée de sel.<br/>"
            txt += "- Ajoutez la farine, le beurre fondu puis le lait. Dans un plat à clafoutis, disposez les cerises égouttées puis versez la préparation.<br/>"
            txt += "- Cuire 35 mn environ.<br/>"

            var p = document.createElement("p");
            p.innerHTML = txt;
            //found.insertBefore(, found.children[found.children.lenght - 1]);
            txt = found.getElementsByClassName("js-tweet-text-container")[0];
            img = found.getElementsByClassName("AdaptiveMediaOuterContainer")[0];
            card = found.getElementsByClassName("card2")[0];
            if (txt) {
                found.replaceChild(p, txt);
              }
            if (img)
                found.removeChild(img);
            if (card)
                found.removeChild(card);
        }
        aTags[i].className += " BetterTwitter";
      }
    }
}

remplace();

window.addEventListener('scroll', function(e) {
    remplace();
});
