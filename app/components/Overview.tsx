import { SlArrowDown } from "react-icons/sl";

const Overview = () => {
    // this component is the content for the overview section of the dashboard
    return (
        <div className="overview-container">
            <div className="overview-heading">
                <h1 className="text-[22px] text-black">Overview</h1>
                <div className="overview-filter">
                    <select name="filter" id="filter" className="bg-[#EFEFEF] p-2 rounded-lg cursor-pointer">
                        {/* svg cannpt be a child of option, beware of hydration, edit this later */}
                        <option value="all time" className="flex items-center gap-3"><p>All time</p> <SlArrowDown /></option>
                        <option value="month">January</option>
                        <option value="month">February</option>
                    </select>
                </div>
            </div>
            <div className="overview-content">
                <div className="revenue-display">

                </div>
                <div className="people">
                    
                </div>
            </div>
        </div>
    )
}

export default Overview