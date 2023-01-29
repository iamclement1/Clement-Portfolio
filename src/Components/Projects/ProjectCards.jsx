import { Fade } from "react-awesome-reveal"
import { ProjectData } from "../../utils/ProjectData"
import Typical from 'react-typical';
import { Link } from "react-router-dom";


function ProjectCards(props) {
    return (
        <>
            <section className="min-h-screen relative bg-[#0f0f11] text-white pb-10">
                <div className="md:px-18 md:py-24 px-2 py-16 md:space-y-0 ">
                    <span className="md:mb-10 mb-6 md:px-16 text-4xl">
                        My Projects
                        <div className="md:px-16 mb-10">
                            <hr className="w-1/3" />

                        </div>
                        <p className="md:px-16 text-sm"> {' '}
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'A list of projects I have worked on',
                                    2000,
                                    'Projects are available on GitHub',
                                    2000,
                                ]}
                            />
                        </p>
                        <p className="md:px-16 text-sm pt-5">
                            Click here to read my <Link to="/articles" className="text-purple-500">Documented Experience </Link>
                        </p>
                    </span>
                    <div className="flex flex-wrap justify-around space-y-2">
                        {
                            ProjectData.map((project, index) => {
                                return (
                                    <>
                                        <Fade direction="up" triggerOnce cascade>
                                            <div className="md:max-w-md rounded overflow-hidden bg-[#191919]
                                    transform  transition duration-500 hover:scale-110"
                                                key={index}>
                                                <div className="px-4 py-4">
                                                    <div className="md:text-4xl text-2xl mb-2">
                                                        {project.title}
                                                    </div>
                                                    <p className="text-sm text-gray-300">
                                                        {project.description}
                                                    </p>
                                                    {/* button with links to each project */}
                                                    <a href={project.link}>
                                                        <p className="text-white mb-3 mt-4 py-3 underline text-xs" type="btn">
                                                            View Project
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </Fade>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default ProjectCards