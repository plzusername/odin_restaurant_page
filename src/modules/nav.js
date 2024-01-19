import {elemCreator, content} from './Utility/elementMaker.js'
import {homePage} from './pages/home.js'
import {menuPage} from './pages/menu.js'
import {contactPage} from './pages/contact.js'
import {footer} from './footer.js'



function navBar(){

    let homeListItem = ''
    let menuListItem = ''
    let contactListItem = ''

    const nav = elemCreator('nav',content)
    const ul = elemCreator('ul',nav,`${homeListItem} ${menuListItem} ${contactListItem}`)

    homeListItem = elemCreator('li',ul,`Home`,{'data-page_module':['home']})
    menuListItem = elemCreator('li',ul,`Menu`,{'data-page_module':['menu']})
    contactListItem = elemCreator('li',ul,`Contact`,{'data-page_module':['contact']})

    const links = [homeListItem, menuListItem, contactListItem]

    links.forEach(element => {
        element.addEventListener('click',navigateToPage)
    });

    nav.appendChild(ul)
}

function navigateToPage(event){
    const section=event.target.dataset.page_module

    content.innerHTML = ''
    
    const pages={
        'home':homePage,
        'menu':menuPage,
        'contact':contactPage
    }
    navBar()
    pages[section]()
    footer()
}

export {navBar}