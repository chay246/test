import { createContext } from "react";
export const InventryContext=createContext();
const InventryProvider=({children})=>{
    const[inventry,setinventry]=useState([]);
    const additonal