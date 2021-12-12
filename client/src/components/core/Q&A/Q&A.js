import './Q&A.css'
import QandAListItem from './Q&AListItem/Q&AListItem'
import QandASidebarItem from './Q&ASidebarItem/Q&ASidebarItem'
import questionService from "../../../services/Questions/QuestionService";
import { useState, useEffect, useContext } from 'react'
import GlobalContext from '../../../contexts/global/GlobalContext';


const QuestionAnswers = (props) => {

    const dispatch = useContext(GlobalContext)[1]
    const [clicked, setClicked] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        questionService.getQuestions()
            .then(data => {
                setQuestions(s => data)
            })
            .catch(err => {
                dispatch({ type: 'error', payload: err })
            })
    }, [dispatch])

    function toggle(title) {
        clicked === title ? setClicked(null) : setClicked(title)
    }

    return (
        <div className="q-and-a-wrapper">
            <div className="q-and-a-container">
                <div className="q-and-a-sidebar">
                    <div className="q-and-a-sidebar-element-wrapper">
                        <QandASidebarItem category={clicked?.category} />
                    </div>
                </div>
                <div className="q-and-a-content-wrapper">
                    <div className="q-and-a-content-inner-wrapper">
                        <div className="q-and-a-content">
                            <ul className="q-and-a-list">
                                {
                                    questions?.map((x) => {
                                        return (
                                            <QandAListItem toggle={() => toggle(x)} data={x} key={x.title} clicked={clicked} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default QuestionAnswers