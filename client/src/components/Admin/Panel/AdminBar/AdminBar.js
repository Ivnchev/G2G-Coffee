import './AdminBar.css'

const AdminBar = ({
    menu,
    setMenu,
    history
}) => {

    function toggle(e) {
        if (e.target.id) {
            setMenu(state => ({ [e.target.id]: true }))
            history.push('/control-panel?=' + e.target.id)
        }
    }

    return (
        <div className="admin-bar-wrapper">
            <div className="admin-bar-container">
                <ul className="admin-bar" onClick={toggle}>
                    <li id="newProduct">New Product</li>
                    <li id="editProduct">Edit Products</li>
                    <li id="sellChart">Sells</li>
                </ul>
            </div>
        </div>
    )
}


export default AdminBar