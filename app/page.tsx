import Home from "./pages/Home"
import UseImage from "components/Image/UseImage";
import SecondPage from "./pages/TwoPage";
import ThridPage from "./pages/Threepage";
import FourPage from "./pages/FourPage";
import FivePage from "./pages/FivePage";
import Footer from "./pages/Footer";
import SliderCard from "components/Side/SideComponent";

export default function Web() {
  return (
    <>
    <Home></Home>
    <UseImage imageUrl="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc5c4ce4784_Bottom%20Squiggle.svg"/>
    <SecondPage />
    {/* Integrate the SliderCard component */}
    
    <div className="">
    <div className="flex justify-center items-center">
       <h1 className="mb-1 max-w-1xl text-6xl leading-none tracking-tight md:text-12xl xl:text-6xl dark:text-white">
       Why our clients stick with us </h1>
     </div>
      <SliderCard />
    </div>
    <br />
    <br />
    <UseImage imageUrl="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7976ce4795_Section%20Curve%2002.svg"/>
    < ThridPage/>
    <FourPage />
    <UseImage imageUrl="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"/>
    <FivePage />
    <Footer />
    </>
  )
}
