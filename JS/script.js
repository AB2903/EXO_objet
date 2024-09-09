let div1 = document.getElementById("first");
let div3 = document.getElementById("info");

let etudiants = [
    {
        numeroEtudiant : 1111111111,
        Prenom : "Alex",
        Nom : "Diallo",
        Age : 21,
        Niveau : "licence 2"
    },
    {
        numeroEtudiant : 2222222222,
        Prenom : "Modou",
        Nom : "Sarr",
        Age : 21,
        Niveau : "Licence 2"
    },
    {
        numeroEtudiant : 3333333333,
        Prenom : "Malick",
        Nom : "Seck",
        Age : 21,
        Niveau : "Licence 2"
    },
    {
        numeroEtudiant : 4444444444,
        Prenom : "Aliou",
        Nom : "Cissé",
        Age : 21,
        Niveau : "Licence 2"
    },
    {
        numeroEtudiant : 5555555555,
        Prenom : "Abo",
        Nom : "Niang",
        Age : 21,
        Niveau : "Licence 2"
    },
    {
        numeroEtudiant : 6666666666,
        Prenom : "Abdoulaye",
        Nom : "Barro",
        Age : 21,
        Niveau : "Licence 2"
    }
]

document.addEventListener("DOMContentLoaded", () => {
    etudiants.forEach(etudiant => {
        let div2 = document.createElement('div');
        div2.classList.add("second");
        let texte = `
            Numéro d'étudiant : ${etudiant.numeroEtudiant}<br><br>
            Prénom : ${etudiant.Prenom}<br><br>
            Nom : ${etudiant.Nom}
        `;
        div2.innerHTML = texte;
        div2.addEventListener("click", () => {
            localStorage.setItem('etudiant', JSON.stringify(etudiant));
            window.location.href = 'info.html';
        })
        div1.appendChild(div2);
        
    })
    
});



document.addEventListener("DOMContentLoaded", () => {
    let etudiant = JSON.parse(localStorage.getItem('etudiant'));

    let div4 = document.createElement("div");
    div4.classList.add('third');
    let tout = `
        Numéro d'étudiant : ${etudiant.numeroEtudiant}<br><br>
        Prénom : ${etudiant.Prenom}<br><br>
        Nom : ${etudiant.Nom}<br><br>
        Âge : ${etudiant.Age}<br><br>
        Niveau : ${etudiant.Niveau}
    `;
    div4.innerHTML = tout;
    div3.appendChild(div4);
});

