import Banner from "@/components/Banner";
// import Login from "@/components/Login/page";
import Products from "@/components/Products";
import Sales from "@/components/Sales";
import Testimonail from "@/components/Testimonail";
import SignUp from "@/components/SignUp"



export default function Home() {
  return (
    <>
  <SignUp />
   <Banner />
   <Products />
   <Sales />
   <Testimonail />
   {/* <Login /> */}
    </>
  );
}
