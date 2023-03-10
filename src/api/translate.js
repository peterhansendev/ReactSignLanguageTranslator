import { createHeaders } from "./index"
const apiUrl = "https://634943afa59874146b1b72d0.mockapi.io/ReactTranslator"

export const translateSubmitted = async (user, input) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify({
                inputs: [input], 
            })   
        }) 
        if (!response.ok) {
            throw new Error('Could not update order')
        }

        const result = await response.json()
        return [ null, result ]
      
        
    } 
    catch (error) {
        return [ error.message, null]
    }
} 

export const translationClearHistory = (userId) => {

}