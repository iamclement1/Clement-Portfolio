import { Fade } from 'react-awesome-reveal'
import { hashnode, medium, totalArticle } from '../../utils/ArticleData'

export default function ArticleCard() {
    return (
        <>
            <section className='min-h-screen relative bg-[#0f0f11] text-white pb-10 '>
                <div className="md:px-20 md:py-24 px-2 py-16 md:space-y-0 ">
                    <Fade direction="up" className="mb-10">
                        <p className="md:text-4xl text-2xl">
                            <span> {totalArticle} </span> articles published
                        </p>
                    </Fade>
                    {/* Hashnode */}
                    <div className="md:flex">

                        <div className="md:w-3/6 mb-8">
                            <div>
                                <Fade direction="up" triggerOnce cascade>
                                    <p className='text-2xl font-medium mb-2 block no-underline'>
                                        Hashnode
                                    </p>
                                </Fade>
                            </div>

                            {
                                hashnode.map((article, index) => {
                                    return (
                                        <Fade direction="up" triggerOnce cascade>
                                            <div className="md:max-w-xl underline ">
                                                <ul key={index}>
                                                    <li>
                                                        <a href={article.read} target="_blank">
                                                            {article.title}
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </Fade>
                                    )
                                })
                            }
                        </div>


                        {/* Articles on Medium */}
                        <div className=" md:w-3/6 mb-8">

                            <div>
                                <Fade direction="up" triggerOnce cascade>
                                    <p className='text-2xl font-medium mb-2'>
                                        Medium
                                    </p>
                                </Fade>
                            </div>

                            {
                                medium.map((article, index) => {
                                    return (
                                        <Fade direction="up" triggerOnce cascade>
                                            <div className="md:max-w-xl underline  ">
                                                <ul key={index}>
                                                    <li>
                                                        <a href={article.read} target="_blank">
                                                            {article.title}
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </Fade>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}