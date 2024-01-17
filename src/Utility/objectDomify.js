import { elemCreator, content } from './elementMaker.js'
import { menuSection } from '../menu.js'

function convertMenuItemToDom( menuItem ){

    let shawermaName = ''
    let ingredients = ''
    let shawermaPrice = ''

    let shawermaItemContainer = elemCreator( 'div', menuSection() , `${shawermaName} ${ingredients} ${shawermaPrice} ` , {'class':['shawerma-box']} )

    shawermaName = elemCreator( 'h1', shawermaItemContainer , menuItem.shawermaName )
    ingredients = elemCreator( 'p', shawermaItemContainer , menuItem.ingredients )
    shawermaPrice = elemCreator( 'span', shawermaItemContainer , menuItem.price )


}

export {convertMenuItemToDom} 