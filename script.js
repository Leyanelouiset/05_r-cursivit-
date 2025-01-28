const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }



//1
const afficherDossier = () => {
console.log(dossierPrincipal.nom)
}
 afficherDossier()



//2

function afficherDossierIteratif (dossier){    //fonction itératif avec boucle for of
for(let element of dossier.contenu){
console.log (element.nom)
}

}
afficherDossierIteratif(dossierPrincipal)



function afficherDossierIteratif1(dossier){   //fonction itératif avec boucle for 

  for(let i=0; i<dossier.contenu.length ;i++){
    console.log(dossier.contenu[i])
  }

}

afficherDossierIteratif1(dossierPrincipal)






const recursive2 = (projets) => { //fonction récursive avec boucle for of 

  console.log(projets.nom)

if (projets === undefined){
  return;
}
for (const j of projets.contenu){
  recursive2(j)
}
}
recursive2(dossierPrincipal)







//3

function afficherDossierRecursive(dossier){  // fcnt récursive avec boucle for of

  console.log(dossier.nom)
  if(dossier.contenu === undefined){
   return;
  }
  for(const i of dossier.contenu)
  afficherDossierRecursive(i)
}
afficherDossierRecursive(dossierPrincipal)









