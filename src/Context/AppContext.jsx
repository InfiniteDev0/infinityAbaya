import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) =>{
    const [Visible, setVisible] = useState(false);
    const value = {
        Visible,
        setVisible
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}