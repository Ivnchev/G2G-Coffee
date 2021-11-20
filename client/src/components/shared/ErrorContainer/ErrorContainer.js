import './ErrorContainer.css'
import { useContext, useState, useEffect } from 'react'
import GlobalContext from '../../../contexts/global/GlobalContext'

const ErrorContainer = (props) => {

    const context = useContext(GlobalContext)[0]
    const [errorState, setErrorState] = useState({})
    useEffect(() => {
        setErrorState(context.error)
        setTimeout(() => {
            setErrorState({})
        }, 4000);
    }, [context])

    return (
        <div>
            {
                errorState?.message ? (
                    <div className={errorState.message?.type === 'success' ? "error-container success" : "error-container error"}>
                        {
                            errorState.message?.type === 'success' ? <i className="fas fa-check"></i>
                                : <i className="far fa-times-circle"></i>
                        }
                        <p>{errorState?.message}</p>
                    </div>
                ) : ''
            }
        </div>
    )
}


export default ErrorContainer