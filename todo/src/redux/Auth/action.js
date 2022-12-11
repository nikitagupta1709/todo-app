import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (token,user)=>(
    {
        type: LOGIN,
        payload:{"token":token, "user":user}
    }
)
export const logout = ()=>(
    {
        type: LOGOUT
    }
)

export const getRegister = (user)=> async()=>{
    try {
        let res = await axios.post("http://localhost:3050/auth/register",user)
        // console.log(res.data.data,"res")
        alert(res.data.message)
    } catch (error) {
        console.log(error)
    }
}

export const getLogin = (user)=> async(dispatch)=>{
    try {
        let res = await axios.post("http://localhost:3050/auth/login",user)
        alert(res.data.message)
        dispatch(login(res.data.token,res.data.user))
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("loggedInUser",JSON.stringify(res.data.user));
    } catch (error) {
        console.log(error)
    }
}