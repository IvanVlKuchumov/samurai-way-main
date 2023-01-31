import React from "react";
import {store, StorePropsType} from "./redux/redux-store";


export type ProviderPropsType = {
    store: StorePropsType
    children: React.ReactNode
}


export const StoreContext = React.createContext({} as typeof store)

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
  }