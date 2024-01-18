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

    const contactSection = elemCreator( 'div', content , `${mainQuestion} ${subQuestions} ${quote} ${country} ${city} ${area} ${street} ${phoneNumber}` , {'class':['contact-section']} )

    mainQuestion = elemCreator( 'h1', contactSection , `Contact us, Will you?` , {'class':['main-question']} )
    subQuestions = elemCreator( 'p', contactSection , `How's the service, staff, and shawerma?` , {'class':['sub-question']} )
    quote = elemCreator( 'p', contactSection , `"Man has always been a curious one, one that has never feared to explore, try new things, and learn from failure, will you take a step forward and let us do so as well?" Naser Alghazawee` , {'class':['contact-quote']} )
    country = elemCreator( 'span', contactSection , `Turkey` , {'class':['restaurant country']} )
    city = elemCreator( 'span', contactSection , `Istanbul` , {'class':['restaurant city']} )
    area = elemCreator( 'span', contactSection , `Sultanahmet` , {'class':['restaurant area']} )
    street = elemCreator( 'span', contactSection , `street 70` , {'class':['restaurant treet']} )
    phoneNumber = elemCreator( 'span', contactSection , `011 2322 0322-93` , {'class':['restaurant-phone number']} )

}

export {contactPage}