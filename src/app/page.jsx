import Image from "next/image";
import VerticalCard from "./component/verticalCard";
import PageTitle from "./component/pageTitle";
import { Funnel_Sans } from "next/font/google";
import ImageSlider from "./component/sider";
import Divider from "./component/divider";
import img1 from "../../public/webFiles/img1.png"
import img2 from "../../public/webFiles/img2.png"
import img3 from "../../public/webFiles/img3.png"
import img4 from "../../public/webFiles/img4.png"
import img5 from "../../public/webFiles/img5.png"
import img6 from "../../public/webFiles/img6.png"

const page = () => {
  return (
    <div>
      <PageTitle title="Home" /><br />
      <ImageSlider/>
      <Divider/>
      <section className="py-10 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VerticalCard ImgUrl={img1} cardImagAlt="Sale Product" cardTitle="Product Selling" cardDescription="Welcome to our dynamic online marketplace, where product selling meets innovation and convenience..." cardLinkTtl="Show More"/>
            <VerticalCard ImgUrl={img2} cardImagAlt="Ordering Products" cardTitle="Ordering Products" cardDescription="Experience the ease of ordering products like never before! Our platform is designed to make your shopping journey smooth,..." cardLinkTtl="Show More"/>
            <VerticalCard ImgUrl={img3} cardImagAlt="Ecommerce" cardTitle="Ecommerce" cardDescription="Welcome to the world of eCommerce, where shopping meets innovation and convenience! Our platform transforms..." cardLinkTtl="Show More"/>
            <VerticalCard ImgUrl={img4} cardImagAlt="Product Management" cardTitle="Product Management" cardDescription="Effective product management is at the heart of a thriving online marketplace. Our platform provides intuitive..." cardLinkTtl="Show More"/>
            <VerticalCard ImgUrl={img5} cardImagAlt="User Creation" cardTitle="User Creation" cardDescription="User creation is the gateway to a personalized and seamless experience on our platform. Our intuitive registration process allows users..." cardLinkTtl="Show More"/>
            <VerticalCard ImgUrl={img6} cardImagAlt="Ecommerce History" cardTitle="Ecommerce History" cardDescription="The history of eCommerce is a tale of innovation, evolution, and global connectivity. Emerging in the early 1970s,..." cardLinkTtl="Show More"/>
          </div>
        </div>
      </section>
    </div>
  );
}
export default page;

export async function generateMetadata() {
  return {
    title: "Online Shopping - Home",
    description: "",
  };
}