import {elemCreator, content} from './Utility/elementMaker.js'

function contactPage(){
    
    let mainQuestion = ''
    let subQuestions = ''
    let quote = ''
    let country = ''
    let city = ''
    let area = ''
    let street = ''
    let phoneNumber = ''

    const contactSection = elemCreator( 'div', content , `${mainQuestion} ${subQuestions} ${quote} ${country} ${city} ${area} ${street} ${phoneNumber}` , {'class':['home-section']} )

    mainQuestion = elemCreator( 'h1', contactSection , `MINI UNCLE SHAWERMA` , {'class':['main-question']} )
    subQuestions = elemCreator( 'p', contactSection , `SHAWERMA ON ANOTHER LEVEL` , {'class':['sub-question']} )
    quote = elemCreator( 'p', contactSection , `Has Shawerma ever had a lasting impact on you, well then you're in the right place! Mini Uncle Shawerma (MUS) has had a profound impact on the happiness of kids since 1901, so what are you wating for!` , {'class':['contact-quote']} )
    country = elemCreator( 'span', contactSection , `Delivery Service` , {'class':['restaurant-country']} )
    city = elemCreator( 'span', contactSection , `Delivery Service` , {'class':['restaurant-city']} )
    area = elemCreator( 'span', contactSection , `Delivery Service` , {'class':['restaurant-area']} )
    street = elemCreator( 'span', contactSection , `Delivery Service` , {'class':['restaurant-street']} )
    phoneNumber = elemCreator( 'span', contactSection , `Delivery Service` , {'class':['restaurant-phone-number']} )

}

export {contactPage}