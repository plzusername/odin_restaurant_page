import { elemCreator, content } from './Utility/elementMaker.js'
import '@fortawesome/fontawesome-free/css/all.css';

function footer(){

    let linkContainer = ''
    let githubIcon = ''
    let githubUserName = ''

    const footerSection = elemCreator( 'div', content , `` , {'class':['footer-section']} )

    linkContainer = elemCreator( 'a', footerSection , `${githubIcon} ${githubUserName}` , {'class':['link-container'], 'href':['https://github.com/plzusername']} )
    
    githubIcon = elemCreator( 'i', linkContainer , `` , {'class':['github-Icon fa-github fa-brands']} )
    githubUserName = elemCreator( 'p', linkContainer , `Mofris` , {'class':['github-user-name']} )

    footerSection.appendChild(linkContainer)

}

export {footer}