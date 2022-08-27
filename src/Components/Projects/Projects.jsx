import { useEffect, useState } from "react"
import ProjectCards from '../Projects/ProjectCards'


export default function Projects () {
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(false);
    })
    return (
        <div>
            { loading ? (
                <div className="text-center m-auto pt-25">
                    <Loader />
                </div>
            ) : (
                <>
                <div className="flex justify-around flex-wrap">
                    <ProjectCards />
                </div>
                </>
            )}
        </div>
    )
}