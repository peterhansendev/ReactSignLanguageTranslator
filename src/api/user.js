import { createHeaders } from "./index"
const apiUrl = "https://634943afa59874146b1b72d0.mockapi.io/ReactTranslator"

export const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if(!response.ok) {
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [ null, data ]
    } 
    catch (error) {
        return [ error.message, [] ]
    }
}

const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                inputs: []
            })
        })
        if(!response.ok) {
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [ null, data ]
    } 
    catch (error) {
        return [ error.message, [] ]
    }
}

export const loginUser = async (username) => {
    const [ checkError, user ] = await checkForUser(username)

    if (checkError !== null) {
        return [checkError, null]
    }

    if(user.length > 0 ) {
        return [ null, user.pop() ]
    }

    return await createUser(username)

}