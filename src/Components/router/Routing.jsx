import { Route, Routes } from "react-router-dom"
import About from "../../Pages/About"
import Error from "../../Pages/Error"
import GetInTouch from "../../Pages/GetInTouch"
import Home from "../../Pages/Home"
import Portfolio from "../../Pages/Portfolio"
import Projects from "../../Pages/Projects"
import Resume from "../../Pages/Resume"
import Articles from "../Articles/Articles"

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/getintouch' element={<GetInTouch />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default Routing