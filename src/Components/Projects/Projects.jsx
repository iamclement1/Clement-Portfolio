import { useEffect, useState } from "react"
import ProjectCards from '../Projects/ProjectCards'
import LoadingScreen from '../LoadingScreen/LoadingScreen'


export default function Projects () {
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(false);
    })
    return (
        <div>
            { loading ? (
                <div className="text-center m-auto pt-25">
                    <LoadingScreen />
                </div>
            ) : (
                <>
                <div className="space-y-3">
                    <ProjectCards />
                </div>
                </>
            )}
        </div>
    )
}