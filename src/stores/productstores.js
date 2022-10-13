// @ts-nocheck
import { writable } from "svelte/store";


//------------------- images----------------------------
import img_burger from "../images/burger.jpg"
import img_sandwish from "../images/sandwish.jpg"
import img_brochette from "../images/brochette.jpg"
import img_pizza from "../images/pizza.jpg"
import img_salade from "../images/salade_nicoise.jpg"
import img_salade_chinoise from "../images/salade_chinoise.jpg"

//----------------End image ----------------------------

//---------------3D Models-----------------------------
import burger_model from "../images/3d model/burger.glb"
import pizza_model from "../images/3d model/pizza.glb"
import salad_chinoise_model from "../images/3d model/salad-chinoise.glb"
import salad_nicoise_model from "../images/3d model/salade-nicoise.glb"
import sandwish_model from "../images/3d model/sandwish.glb"


//---------------End Models----------------------------








export const  products =(writable(
    [
        {
           id:0,
           name:'burger',
           image:img_burger,
           description: 'dlkslkdakl kfdlfks lorem das',


           //==model============//
           model:burger_model,
           //==================//


           //===Information nutritionnelle==//
           valeur_energetique: "245kcal",
           Graisses_sature:'22,5 g 4,8 g',
           Hydrates_carbon:'2,3 g 0,7 g',
           Protéines:'8,2 g',
           Sel:'1,2 g'
           //================================//
        },
        {
           id:1,
           name:'sandwich',
           image:img_sandwish,
           description:'abcdeghijklmno',


            //==model============//
            model:sandwish_model,
            //==================//
 
 
            //===Information nutritionnelle==//
            valeur_energetique: "245kcal",
            Graisses_sature:'22,5 g 4,8 g',
            Hydrates_carbon:'2,3 g 0,7 g',
            Protéines:'8,2 g',
            Sel:'1,2 g'
            //================================//
        },
        {
            id:2,
            name:'brochette',
            image:img_brochette,
            description:'abcdeghijklmno',

             //==model============//
           model:burger_model,
           //==================//


           //===Information nutritionnelle==//
           valeur_energetique: "245kcal",
           Graisses_sature:'22,5 g 4,8 g',
           Hydrates_carbon:'2,3 g 0,7 g',
           Protéines:'8,2 g',
           Sel:'1,2 g'
           //================================//
         },
         {
            id:3,
            name:'pizza',
            image:img_pizza,
            description:'abcdeghijklmno',

             //==model============//
           model:pizza_model,
           //==================//


           //===Information nutritionnelle==//
           valeur_energetique: "245kcal",
           Graisses_sature:'22,5 g 4,8 g',
           Hydrates_carbon:'2,3 g 0,7 g',
           Protéines:'8,2 g',
           Sel:'1,2 g'
           //================================//
         },
         {
            id:4,
            name:'salade nicoise',
            image:img_salade,
            description:'abcdeghijklmno',

             //==model============//
           model:salad_nicoise_model,
           //==================//


           //===Information nutritionnelle==//
           valeur_energetique: "245kcal",
           Graisses_sature:'22,5 g 4,8 g',
           Hydrates_carbon:'2,3 g 0,7 g',
           Protéines:'8,2 g',
           Sel:'1,2 g'
           //================================//
         },
         {
            id:5,
            name:'salade chinoise',
            image:img_salade_chinoise,
            description:'abcdeghijklmno',

             //==model============//
           model:salad_chinoise_model,
           //==================//


           //===Information nutritionnelle==//
           valeur_energetique: "245kcal",
           Graisses_sature:'22,5 g 4,8 g',
           Hydrates_carbon:'2,3 g 0,7 g',
           Protéines:'8,2 g',
           Sel:'1,2 g'
           //================================//
         }

       
       ]
))