const content=document.querySelector('.content')

function elemCreator( element, parentElement = document.body , elementContent = ' '  , elementAttributes = {}){

    let createdElement = document.createElement( element )
  
    for (const [key, value] of Object.entries(elementAttributes)) {
        for (let i = 0 ; i < value.length ; i++) {
  
            const element = value[i];
  
            createdElement.setAttribute(key, element)
            
        }
    }
  
    createdElement.innerHTML=elementContent
  
    parentElement.appendChild(createdElement) 
  
    return createdElement
  
}

export {elemCreator, content}