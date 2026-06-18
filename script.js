const projetNonDetail = document.querySelectorAll('.projetND');
const projetDetaille = document.querySelectorAll('.projetDetaille');

function afficheProjet(){
    let Projet_ouvert = localStorage.getItem("Projet_ouvert");
    projetDetaille.forEach(leProjet => {
        if (leProjet.classList[1] == Projet_ouvert) {
            leProjet.classList.toggle('voir');
            leProjet.classList.toggle('cache');
            console.log(leProjet.classList)
        }
        else{
            leProjet.classList.remove('voir');
            leProjet.classList.add('cache');
        }
    });
    projetNonDetail.forEach(leProjet => {
        if (leProjet.classList[1] == Projet_ouvert) {
            leProjet.classList.toggle('choisi');
            console.log(leProjet.classList)
        }
        else{
            leProjet.classList.remove('choisi');
        }
    });
}

projetDetaille.forEach(leProjet => {
    leProjet.classList.add('cache')
});
projetNonDetail.forEach(leProjet => {
    leProjet.addEventListener('click', () => {

        localStorage.setItem("Projet_ouvert", leProjet.classList[1])
        afficheProjet();
    });
});

afficheProjet();