export const cardContext=createContext();
export const CardProvider=({children})=>{
    const[card,setcard]=useState([]);
    const addtocard=(product)=>{
        setcard(prev=>{
            const exist=prev.find(item=>item.id===product.id);
            if(exist){
              return prev.map(p=>
                p.id === product.id ? {...p,qty:p.qty+1} : p
              );
            }
            return [...prev,{...product,qty:1}];
              

        });
    };
    return(
        <cardContext.Provider value={{card,addtocard}}>
            {children}
        </cardContext.Provider>
    );
};