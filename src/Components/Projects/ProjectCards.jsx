import { ProjectData } from "../../utils/ProjectData"

function ProjectCards(props) {
    return (
        <>
            <section className="min-h-screen relative bg-[#0f0f11] text-white pb-10">
                <div className="md:px-20 md:py-24 px-2 py-16 md:flex md:space-x-5 md:space-y-0 ">
                    <div className="flex flex-wrap justify-around">
                        {
                            ProjectData.map((project, index) => {
                                return (
                                    <div className="md:max-w-sm rounded overflow-hidden bg-[#191919]
                                    transform  transition duration-500 hover:scale-110 space-y-3"
                                        key={index}>
                                        <img src={project.image} alt="" />
                                        <div className="px-4 py-4">
                                            <div className="text-xl mb-2 font-bold">
                                                {project.title}
                                            </div>
                                            <p className="text-sm text-gray-300">
                                                {project.description}
                                            </p>
                                            {/* button with links to each project */}
                                            <a href={project.link}>
                                                <button className="bg-gradient-to-r from-pink-400 via-purple-500 
                                            to-purple-600 text-white md:py-2 md:px-4 mb-3 mt-4 py-3 p-3  text-md 
                                            rounded-md" type="btn">
                                                    View Project
                                                </button>
                                            </a>
                                        </div>
                                    </div>
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