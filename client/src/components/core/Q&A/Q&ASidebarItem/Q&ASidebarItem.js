import './Q&ASidebarItem.css'



const QandASidebarItem = ({
    category
}) => {


    return (
        <div className="q-and-a-sidebar-element">
            <p>Category : </p> <span>{category ? category : ''}</span>
        </div>
    )
}


export default QandASidebarItem