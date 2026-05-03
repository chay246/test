  import {createContext,usestate,useEffect} from "react";
  export const AuthContext=createContext();
  export const AuthProvider=({children})=>{
    const [user,setuser]=usestate(null);
    useEffect(()=>{
      const saved=localStorage.getItem("user");
      if(saved)
        setuser((saved));
      },[]);
const login=(data)=>{
    setuser(data);
}
localStorage.setItem("user",user);
    return(
        <AuthContext.Provider value={{user,login}}>
            {children}
        </AuthContext.Provider>
    );
};