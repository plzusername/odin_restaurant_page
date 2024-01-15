import {elemCreator, content} from './Utility/elementMaker.js'

function navBar(){

    let homeListItem = ''
    let menuListItem = ''
    let contactListItem = ''

    const nav = elemCreator('nav',content)
    const ul = elemCreator('ul',nav,`${homeListItem} ${menuListItem} ${contactListItem}`)

    homeListItem = elemCreator('li',ul,`Home`,{'data-page_module':['home']})
    menuListItem = elemCreator('li',ul,`Menu`,{'data-page_module':['menu']})
    contactListItem = elemCreator('li',ul,`Contact`,{'data-page_module':['contact']})

    nav.appendChild(ul)
}

export {navBar}