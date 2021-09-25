import "./Panel.css"
import SellChart from "../SellChart/SellChart"
import AdminBar from "./AdminBar/AdminBar"
import { useState, useEffect } from "react"
import NewProduct from "../NewProduct/NewProduct"
import ProductsEditList from "../ProductsEditList/ProductsEditList"


const Panel = ({
    history
}) => {

    const [menu, setMenu] = useState({ sellChart: true })

    useEffect(() => {
        if (history.location.search !== "") {
            setMenu(state => ({ [history.location.search.slice(2)]: true }))
        }

        return () => {
            
        }

    }, [history.location.search])


    return (
        <div className="control-panel-layout">
            <AdminBar setMenu={setMenu} menu={menu} history={history} />
            {
                menu.sellChart ?
                    (<SellChart />)
                    : menu.newProduct
                        ? (<NewProduct />)
                        : menu.editProduct
                            ? (<ProductsEditList />)
                            : ''
            }
            {/* <div style={menu.sellChart ? { display: 'flex' } : { display: 'none' }}>
                <SellChart />
            </div>
            <div style={menu.newProduct ? { display: 'flex' } : { display: 'none' }}>
                <NewProduct />
            </div>
            <div style={menu.editProduct ? { display: 'flex' } : { display: 'none' }}>
                <ProductsEditList />
            </div> */}
        </div>
    )
}


export default Panel