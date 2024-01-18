import { elemCreator, content } from './Utility/elementMaker.js'
import { convertMenuItemToDom } from './Utility/objectDomify.js'

class menuItem{

    constructor( shawermaName , ingredients , priceInDollars ) {

        this.shawermaName = shawermaName
        this.ingredients = ingredients
        this.price = priceInDollars

    }

    callConvertMenutoDom() {
        return convertMenuItemToDom(this)
    }

}

function menuSection(){
    if(!document.body.contains(document.querySelector('.menu-section'))) {

        return elemCreator( 'div', content , '' , {'class':['menu-section']} )

    }

    else {

        return document.querySelector('.menu-section')
    }
}

function menuPage(){

    const menuBoard = elemCreator( '', content , ...[
        new menuItem('Chicken shawerma','Arabic flat bread, 2lb Chicken gus, 3 Sliced Cucumbers, Finely Diced Tomatoes, Extra Mayonaise with Ketchup, and of course the Special Ingrediant: Motivation!','1.50 JD').callConvertMenutoDom()

        , new menuItem('Meat shawerma','Arabic flat bread, 2lb Meat gus, 1 Sliced cucumber, Spicey red Pepper Sauce, Some ketchonaise, and of course the special ingrediant: Adaptability!','1.50 JD').callConvertMenutoDom()

        , new menuItem('Chicken shawerma Assaj','Arabic flat bread, 2lb Chicken (Assaj), A hot Red Pepper, Spicey red Pepper Sauce, Well cooked Onions, and of course the special ingrediant: Strength!','2.50 JD').callConvertMenutoDom()

        , new menuItem('Meat shawerma Assaj','Arabic flat bread, 2lb Meat (Assaj), A hot Red Pepper, Spicey red Pepper Sauce, Well cooked Onions, and of course the special ingrediant: Tenacity!','2.50 JD').callConvertMenutoDom()

        , new menuItem('Kebab shawerma','Arabic Hamam bread, 3lb Meat Kebab , Extreme amounts of ketchup, Grated cucumbers, Chopped onions and tomatoes, and of course the special ingrediant: Efficiency!','3.00 JD').callConvertMenutoDom()

        , new menuItem('Shish tawook','Arabic Hamam bread, 3lb Shish tawook (chicken) , Grated cucumbers, Chopped onions and tomatoes, and of course the special ingrediant: Resilience!','3.50 JD').callConvertMenutoDom()

    ] , {'class':['menu-section']} )

}

export {menuPage, menuSection}