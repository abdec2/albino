import { createContext, useReducer } from "react";
import { AppReducer } from './AppReducer'

const initialState = {
    account: null, 
    network: null,
    web3: {
        contract: null,
        provider: null
    }
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    const addAccount = (account) => {
        dispatch({
            type: 'ADD_ACCOUNT',
            payload: account.id
        })
    }
    const delAccount = () => {
        dispatch({
            type: 'DELETE_ACCOUNT'
        })
    }

    const addNetwork = (network) => {
        dispatch({
            type: 'ADD_NETWORK',
            payload: network
        })
    }

    const delNetwork = () => {
        dispatch({
            type: 'DELETE_NETWORK'
        })
    }

    const addContract = (contract) => {
        dispatch({
            type: 'ADD_CONTRACT',
            payload: contract
        })
    }

    const delContract = () => {
        dispatch({
            type: 'DELETE_CONTRACT'
        })
    }

    const addProvider = (provider) => {
        dispatch({
            type: 'ADD_CONTRACT',
            payload: provider
        })
    }

    const delProvider = () => {
        dispatch({
            type: 'DELETE_CONTRACT'
        })
    }

    

    return (
        <GlobalContext.Provider value={
            {
                account: state.account, 
                network: state.network,
                web3: state.web3,
                delAccount, 
                addAccount,
                addNetwork,
                delNetwork,
                addContract,
                delContract, 
                addProvider,
                delProvider

            }
        }
        >
            {children}
        </GlobalContext.Provider>
    )
}