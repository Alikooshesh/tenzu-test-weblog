'use client'

import { store, persistore } from "@/redux/store"
import { ReactElement } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

interface Iprops {
    children?: ReactElement
}

const ReduxWrapper = ({children}:Iprops)=>{
    return(
        <Provider store={store ?? null}>
          <PersistGate persistor={persistore}>
              {()=>(
                <>
                    {children}
                </>
              )}
          </PersistGate>
      </Provider>
    )
}

export default ReduxWrapper