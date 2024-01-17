const content=document.querySelector('.content')

function elemCreator( element, parentElement = document.body , elementContent = ' '  , elementAttributes = {}){

    if(element){

        let createdElement = document.createElement( element )

        for (const [key, value] of Object.entries(elementAttributes)) {
            createdElement.setAttribute(key, value)                
        }
      
        createdElement.innerHTML=elementContent
      
        parentElement.appendChild(createdElement) 
      
        return createdElement
    

    }

  
  
}

export {elemCreator, content}