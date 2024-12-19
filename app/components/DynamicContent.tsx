import Dashboard from "./Dashboard"
import Products from "./Products"

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
        </div>
  )
}

export default DynamicContent