import { ProjectData } from "../../utils/ProjectData"

function ProjectCards(props) {
    return (
        <>
            <section className="min-h-screen relative bg-[#0f0f11] text-white pb-10">
                <div className="md:px-24 md:py-24 px-2 py-16 md:flex md:space-x-5 md:space-y-0
            space-y-3">
                    <div className="md:max-w-sm min-w-screen rounded overflow-hidden transform
                    transition duration-500 hover:scale-110 cursor-pointer">
                        {
                            ProjectData.map((project, index) => {
                                return (
                                    <>
                                        <div className="md:max-w-sm rounded " key={index}>
                                            <img src={project.image} alt="" />
                                        </div>
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