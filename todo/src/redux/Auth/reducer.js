import {LOGIN} from "./action"

const initState = {
    token : localStorage.getItem("token") || null,
    loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null
}

const loginReducer = (state=initState, {type, payload}) =>{
    switch(type){
        case LOGIN : {
            return {
                token:payload.token,
                loggedInUser:payload.user
            };
        }
        default: {
            return state
        }
    }
} 
export default loginReducer; 