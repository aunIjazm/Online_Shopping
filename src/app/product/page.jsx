import PrdctNav from "../component/prdctPgComp/prdctnav";



const { default: PageTitle } = require("../component/pageTitle")

const product=()=>{
    return(
        <div>
            <PageTitle title="Products You can Shop Here"/>
            <PrdctNav/>
            
        </div>
    )
}
export default product;

