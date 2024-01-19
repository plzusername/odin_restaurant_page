import {elemCreator, content} from '../Utility/elementMaker.js'

function homePage(){
    
    let title = ''
    let subtitle = ''
    let description = ''
    let deliveryButton = ''

    const homeSection = elemCreator( 'div', content , `${title} ${subtitle} ${description} ${deliveryButton}` , {'class':['home-section']} )

    title = elemCreator( 'h1', homeSection , `MINI UNCLE SHAWERMA` , {'class':['restaurant-title']} )
    subtitle = elemCreator( 'h2', homeSection , `SHAWERMA ON ANOTHER LEVEL` , {'class':['restaurant-sutitle']} )
    description = elemCreator( 'p', homeSection , `Has Shawerma ever had a lasting impact on you, well then you're in the right place! Mini Uncle Shawerma (MUS) has had a profound impact on the happiness of kids since 1901, so what are you wating for!` , {'class':['restaurant-description']} )
    deliveryButton = elemCreator( 'button', homeSection , `Delivery Service` , {'class':['deleviry-button']} )

}

export {homePage}