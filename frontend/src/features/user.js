import { createSlice } from "@reduxjs/toolkit"
import { selectUser } from '../utils/selectors'

const initialState = {
    status: 'void',
    pseudo: null,
    email: null,
    password: null,
    data: null,
    cache: null,
    error: null,
}

export async function createUser(dispatch, getState) {
    const status = selectUser(getState()).status
    const pseudo = selectUser(getState()).pseudo
    const email = selectUser(getState()).email
    const password = selectUser(getState()).password

    if (status === 'pending' || status === 'updating') {
        return
    }

    dispatch(actions.fetching())

    const requestData = { pseudo, email, password }

    try {

        const response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData),
        
        })

        const data = await response.json()

        dispatch(actions.resolved(data))

    } catch (error) {
        dispatch(actions.rejected(error))
    }


}

export async function fetchUser(dispatch, getState) {
    const status = selectUser(getState()).status
    const email = selectUser(getState()).email
    const password = selectUser(getState()).password

    if (status === 'pending' || status === 'updating') {
        return
    }

    dispatch(actions.fetching())
    const requestData = { email, password }
    
    try {

        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData),
        
        })

        const data = await response.json()
        
        dispatch(actions.resolved(data))
        
        localStorage.setItem('user', JSON.stringify(data))

    } catch (error) {
        dispatch(actions.rejected(error))
    }

}

const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetching: (draft) => {
            if (draft.status === 'void') {
                // on passe en pending
                draft.status = 'pending'
                return
            }
            
            // si le statut est rejected
            if (draft.status === 'rejected') {
                // on supprime l'erreur et on passe en pending
                draft.error = null
                draft.status = 'pending'
                return
            }

            // si le statut est resolved
            if (draft.status === 'resolved') {
                // on passe en updating (requête en cours mais des données sont déjà présentent)
                draft.status = 'updating'
                return
            }

            // sinon l'action est ignorée
            return
        },

        resolved: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en resolved et on sauvegarde les données
                draft.data = action.payload
                draft.status = 'resolved'
                
                // on vide pseudo, mail et password
                draft.pseudo = null
                draft.email = null
                draft.password = null
                return
            }

            // sinon l'action est ignorée
            return
        },

        rejected: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en rejected, on sauvegarde l'erreur et on supprime les données
                draft.status = 'rejected'
                draft.error = action.payload
                draft.data = null
                draft.pseudo = null
                draft.email = null
                draft.password = null
                return
            }
            // sinon l'action est ignorée
            return
        },

        
    },
})

export default reducer