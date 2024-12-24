import Header from "./blog/Header"
import { Route,Routes } from "react-router-dom"
import TopNav from "./blog/TopNav"
import Home from "./blog/HomePage"; 
import AboutUS from "./blog/AboutUS"
import  ContactUs from "./blog/ContactUs"
import Placement from "./blog/Placement"
import Registration from "./blog/Registration"
import PrivacyPolicy from "./blog/PrivacyPolicy"
import Courses from "./blog/Courses"
import Events from "./blog/Events"
import Alumni from "./blog/Alumni"
import Blog from "./blog/Blog"
import FAQ from "./blog/FAQ"
import Career from "./blog/Career"
import Tutorials from "./blog/Tutorials"
import Counseling from "./blog/Counseling"
import Certificate from "./blog/Certificate"

function App() {

  return (
    <>
     <Header>
      {/* <TopNav data="Welcome to the ducat" /> */}
     </Header>
     
        <div className="wrapper">
          <Routes>
          <Route path="/" element={<Home />} /> {/* Render Home component here */}

          {/* <Route path="/" element={<h1>Home page</h1>}></Route> */}
          <Route path="/page1" element={<AboutUS/>}></Route>
          <Route path="/page2" element={<ContactUs/>}></Route>
          <Route path="/page3" element={<Courses/>}></Route>
          <Route path="/page4" element={<Placement/>}></Route>
          <Route path="/page5" element={<Registration/>}></Route>
          <Route path="/page6" element={<Certificate/>}></Route>
          <Route path="/page7" element={<Counseling/>}></Route>
          <Route path="/page8" element={<Tutorials/>}></Route>
          <Route path="/page9" element={<Blog/>}></Route>
          <Route path="/page10" element={<FAQ/>}></Route>
          <Route path="/page12" element={<Career/>}></Route>
          <Route path="/page13" element={<Alumni/>}></Route>
          <Route path="/page14" element={<Events/>}></Route>
          <Route path="/page15" element={<PrivacyPolicy/>}></Route>

          <Route path="/*" element={<h1>ERROR 404</h1>}></Route>
          </Routes>
         
        </div>
     
    </>
  )
}

export default App;
