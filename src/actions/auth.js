import {firebase, googleAuthProvider, yahooAuthProvider} from '../firebase/firebase';


export const login =(uid) =>({
    type: 'LOGIN',
    uid
})

export const startGoogleLogin = () =>{
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}


export const startYahooLogin = () =>{
    return () => {
        return firebase.auth().signInWithPopup(yahooAuthProvider);
    }
}

export const logout = () =>({
    type: 'LOGOUT'
})

export const startLogout = () =>{
    return() =>{
        return firebase.auth().signOut();
    }
}