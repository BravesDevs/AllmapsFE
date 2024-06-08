import profileImage from '../../assets/Profile.jpg';

export const About = () => {
    return (
        <div id="container" className="font-poppins bg-black relative p-20 w-auto flex px-24 justify-center relative">

            <div id="container" className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
                <div className="mr-10">
                    <img
                        className="rounded-full w-100 h-90 md:w-100 md:h-90"
                        src={profileImage}
                        alt="image of myself"
                    />
                </div>
                <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
                    <h1 className="text-white font-bold text-3xl mt-6 mb-8">
                        Hey it's me, Devang Parekh
                    </h1>

                    <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                        I am Devang, a researcher at the University of Waterloo and a former student at Conestoga College. Currently,
                        I am working on a paper under Dr Richard Mann that involves developing an algorithm for effectively optimizing the selection of features based on statistical scores, which heavily influence the output.
                        This selection ranges from billions to trillions of features.
                    </p>

                    <div id="social" className="flex flex-wrap justify-start items-center gap-4">
                        <a rel="noopener" target="_blank" href="https://github.com/bravesdevs" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                            <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
                            <span>Visit my Github</span>
                        </a>
                        <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/bravesdevs" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                            <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
                            <span>Follow me on Linkedin</span>
                        </a>
                        {/* <a rel="noopener" target="_blank" href="https://twitter.com/ichbinaydin" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                            <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" width="20px" height="20px" alt="Twitter" />
                            <span>Follow me on Twitter</span>
                        </a> */}
                    </div>



                </div>
            </div>
        </div>
    )
};