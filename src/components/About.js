import svg2 from '../img/undraw_fireworks_re_2xi7.svg'

export default function About(){
    return(
        <div>
            <div className="container flex items-center justify-center mb-20 text-3xl ">
            <h1 id="about">About Me</h1>  
            </div>
            <section className="container mb-32 flex items-center">
            <div className="flex flex-wrap">
                <div className="grow-0 shrink-0 basis-auto w-full md:w-2/12 lg:w-3/12">
            <img src={svg2} className="w-full shadow-lg rounded-lg mb-6"
                    alt="" />
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full md:w-10/12 lg:w-9/12 md:pl-6 text-center md:text-left">
                <div className="mb-6 flex space-x-4 justify-center md:justify-start">
                </div>
                <p className="text-xl sm:text-m">
                    I am currently studying full-stack web development through the Ohio State University Coding Bootcamp. I first got interested in coding when I discovered cryptocurrency and was insanely fascinated with finding out how it worked. I am currently 20 years old and live in Columbus, OH. My interests include travel, sports, cooking, reading, and spending time with my family, my girlfriend, and my cat Jasmine.
                </p>
                </div>
            </div>
            </section>
        </div>
    
    )
}

