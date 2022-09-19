import { Fade } from "react-awesome-reveal"
import { ProjectData } from "../../utils/ProjectData"

function ProjectCards(props) {
    return (
        <>
            <section className="min-h-screen relative bg-[#0f0f11] text-white pb-10">
                <div className="md:px-20 md:py-24 px-2 py-16 md:flex  md:space-y-0 ">
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
                                                    <div className="text-4xl mb-2">
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