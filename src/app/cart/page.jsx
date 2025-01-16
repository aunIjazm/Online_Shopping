import CartPage from "../component/cart/cartTable";
import PageTitle from "../component/pageTitle";

const cart=()=>{
    return(
        <div>
            <PageTitle title="Your Cart 🛒"/>
            <br/>
            <CartPage/>
        </div>
    )
}
export default cart;

export async function generateMetadata() {
    return {
      title: "Your Cart",
      description: "",
    };
  }