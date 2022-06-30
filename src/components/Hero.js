import svg1 from '../img/undraw_developer_activity_re_39tg.svg'


export default function Hero(){
return(
<div  className="container flex flex-col sm:flex-row items-center mt-40 mb-60">
    <div className="mr-0 md:mr-20">
        <h2 className="text-3xl mb-10 font-bold text-center sm:text-left">Hello, I'm Josh</h2>
        <p className="text-xl text-center sm:text-left">I am a full-stack web developer fluent in HTML, CSS, JavaScript, Node.js, SQL, and more.
            Check out some of my previous work below and I'd love to connect and see how we can work together!
        </p>
        <div className="text-3xl pt-10 flex gap-10 justify-center sm:justify-start">
            <a href="https://github.com/joshgreiff" target="_blank">
            <i className="fa-brands fa-github cursor-pointer"></i>
            </a>
            <a href="https://twitter.com/joshgreiff" target="_blank">
            <i className="text-twitter fa-brands fa-twitter cursor-pointer"></i>
            </a>
            <a href="https://www.linkedin.com/in/joshua-greiff-29502718a/" target="_blank">
            <i className="text-linkedin fa-brands fa-linkedin cursor-pointer"></i>
            </a>
            <a href="https://www.instagram.com/josh.greiff/" target="_blank">
            <i className="text-instagram fa-brands fa-instagram cursor-pointer"></i>
            </a>
        </div>
        <div className="flex justify-center mb-16 sm:justify-start">
        <a href="./img/Josh's Resume.pdf " download="Josh_Greiff_Resume">
            <button className="border-white border-3 mt-5 shadow bg-gray-500 hover:bg-dark focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Download my resume</button>
        </a>
        </div>
    </div>
    <div>
        <img src={svg1} alt=""/>
    </div>
</div>
)
}