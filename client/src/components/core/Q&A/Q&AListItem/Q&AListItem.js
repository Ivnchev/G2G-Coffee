import './Q&AListItem.css'



const QandAListItem = ({
    toggle,
    data,
    clicked
}) => {

    return (
        <li className={"q-and-a-element" + ((clicked?.title === data.title) ? ' active' : '')} onClick={toggle}>
            <h3>{data.title}</h3>
            <div className={'q-and-a-element-content' + ((clicked?.title === data.title) ? ' visible' : '')}>
                <p className="q-and-a-element-paragraph">
                    {data.answer}
                </p>
            </div>
        </li>
    )
}


export default QandAListItem