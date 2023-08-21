import { useState } from "react";
import { createContext,useContext } from "react";

//1. crear contexto, este es el que debemos comsumir
export const  FiltersContext = createContext()

//2. crear el provider, este es el que nos provee acceso al contexto
export function FiltersProvider ({children}){
    const [filters,setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}