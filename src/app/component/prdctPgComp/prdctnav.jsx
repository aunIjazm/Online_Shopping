
import PrdctSrch from "./prdctSrch";
import ContantSection from "./productBody";

const PrdctNav=()=>{
    return(
        
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {/* <PrdctSrch/> */}
                <br/>
                <ContantSection/>
            </div>
    )
}
export default PrdctNav;

export async function generateMetadata() {
    return {
      title: "Online Shopping",
      description: "",
    };
  }