// TEST

class Rectangle {
    constructor(hauteur,largeur){
        this.hauteur = hauteur;
        this.largeur = largeur;
    }
}

let newRectangle = new Rectangle(30,20);

console.log(newRectangle);



class Animal {
    constructor(pates){
        this.pates = pates;
    }
    parler(){
        console.log(`Je fais du bruit avec mes ${this.pates} pates`);
    }
}

class Chien extends Animal {
    constructor(pates,couleur){
        super(pates)
        this.couleur= couleur;
    }
    parler(){
        super.parler();
    }
}
// let Animal2 = new Animal(4);
let bulldog = new Chien(4,'orange');
bulldog.parler();
console.log(bulldog);
//


// // TEST

class Personnage {
    constructor(age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
    }
    sePresenter(){
        console.log(`Bonjour, je m'appelle ${this.nom}!`);
    }
}

let perso1 = new Personnage (30, `Lola`, `Vilnius`);
let perso2 = new Personnage (28, `Ninou`, `Helsinki`);
console.log(perso1);
console.log(perso2);
perso1.sePresenter();
perso2.sePresenter();


// ## EXO1
// ## Traduire le code suivant en class et en instances



// Test 1
class Lieux {
    constructor(nom,contenu,ingerdients){
        this.nom = nom;
        this.contenu = contenu;
        this.ingerdients = ingerdients;
    }
    choix(){
        console.log(`Je vais aller à/au ${this.nom}`);
    }
}
let grenier = new Lieux(`grenier`,`[]`,`[]`);
console.log(grenier);


// Test 2

class lieu {
    constructor(nom,contenu,ingredients){
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients;
    }
}

let maison = new lieu("maison",[]);
let epicerie = new lieu("epicerie",[],[]);
let cuisine = new lieu("cuisine",[],[]);



// Test 1
/*

Ingredients
let poivron = {
    nom: 'poivron',
    etat: 'entier',
    prix:  1 ,
};
let oignon = {
    nom: 'oignon',
    etat: 'entier',
    prix:  2 ,
};
let oeuf = {
    nom: 'oeuf',
    etat: 'entier',
    prix:  4 ,
};
let epice = {
    nom: 'epice',
    etat: 'moulu',
    prix:  3.25 ,
};
let paprika = {
    nom: 'paprika',
    etat: 'moulu',
    prix:  1.5 ,
};
let fromage = {
    nom: 'fromage',
    etat: 'coupé',
    prix:  1.6 ,
};

*/

class Ingredients{
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
        choix(){
        console.log(`Je fais un choix de ${this.Ingredients}`);
    }

}
let poivroné = new Ingredients(`poivron`,`moulu`,`1.6`);
console.log(poivroné);


// Test 2

class ingredient {
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new ingredient("poivron","entier","1");
let oignon = new ingredient("oigon","entier",2);
let oeuf = new ingredient("oeuf","entier",4);
let epice = new ingredient("epice","moulu",3.25);
let paprika = new ingredient("paprika","moulu",1.5);
let fromage = new ingredient("fromage","coupé",1.6);



class Personne {
    constructor(nom,lieu,argent,panier){
        this.nom = Nathan;
        this.lieu = "néan";
        this.argent = 100;
        this.panier = [];
    }

    se_deplacer(x){
    }

    payer(x){
    }

    couper(y){
    }
}