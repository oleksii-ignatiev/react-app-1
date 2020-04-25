export const api = Object.freeze({
    
    forcast: {
        get: ( days ) => {
            return fetch( `https://lab.lectrum.io/rtx/api/forecast?limit=${days}`, { 
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                },
            })   
        }
    },
})
