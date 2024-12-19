import Dashboard from "./Dashboard"
import Products from "./Products"
import Customers from "./Customers"
import Shop from "./Shop"
import Income from "./Income"
import Promote from "./Promote"
import Settings from "./Settings"

interface Props{
    selectedMenu: string
}
const DynamicContent = ({selectedMenu}:Props) => {

    // this component navigates/routes dynamically to whichever content is required depending on the action of the user
    
  return (
        <div className="dynamicContent">
            {selectedMenu === "home" && (
            <div className="home">
                <Dashboard />
            </div>
        )}
        {selectedMenu === "products" && (
            <div className="products">
               <Products />
            </div>
        )}
        {selectedMenu === "customers" && (
            <div className="customers">
               <Customers />
            </div>
        )}
        {selectedMenu === "shop" && (
            <div className="shop">
               <Shop />
            </div>
        )}
        {selectedMenu === "income" && (
            <div className="income">
               <Income />
            </div>
        )}
        {selectedMenu === "promote" && (
            <div className="promote">
               <Promote />
            </div>
        )}
        {selectedMenu === "settings" && (
            <div className="settings">
               <Settings />
            </div>
        )}
        </div>
  )
}

export default DynamicContent