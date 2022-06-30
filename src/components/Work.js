
export default function Work(){
    return(
        <div>
            <div className="container flex items-center justify-center mb-20 text-3xl ">
            <h1 id="my-work">My Work</h1>  
            </div>
            <div className="container flex flex-col sm:flex-row gap-20">
                
                <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                    <a href="https://joshgreiff.github.io/run-buddy/" target="_blank">
                        <img className="w-full" src={require('../img/run-buddy-ss.png')} alt=""/>
                    </a>
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Run Buddy</div>
                    <p className="text-gray-400 text-base">
                        A landing page for a run tracking application using pure HTML and CSS.
                    </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                    <a href="https://joshgreiff.github.io/Coding-Quiz/" target="_blank">
                        <img className="w-full h-90" src={require("../img/coding-quiz-ss.png")} alt=""/>
                    </a>
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Coding Quiz</div>
                    <p className="text-gray-400 text-base">
                        An interactive quiz that stores a high score in the browser and has a built in timer.
                    </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                    <a href="https://github.com/joshgreiff/trivia" target="_blank">
                        <img className="w-full h-90" src={require("../img/electrivia-ss.png")} alt=""/>
                    </a>
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Electrivia</div>
                    <p className="text-gray-400 text-base">
                        A quiz-taking site where users can post and take quizzes. Full stack application with working 
                        API routes for logging in, creating and manipulating data etc. 
                    </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.JS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express.JS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Handlebars.JS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL/Sequelize</span>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col sm:flex-row gap-20 mt-20">
            
            <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                <a href="https://joshgreiff.github.io/reverse-mortgage-calculator/" target="_blank">
                    <img className="w-full" src={require("../img/reverse-mortgage-calculator.png")} alt=""/>
                </a>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mortgage Calculator</div>
                <p className="text-gray-400 text-base">
                    I created a working reverse mortgage calculator using just HTML CSS and JavaScript as a freelance project.
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>

                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                <a href="https://github.com/joshgreiff/ecommerce-backend" target="_blank">
                    <img className="w-full h-90" src={require("../img/ecom-ss.png")} alt=""/>
                </a>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Ecommerce Backend</div>
                <p className="text-gray-400 text-base">
                    A backend for an ecom site. Has a working server and API routes to create, edit and delete data in the SQL database.
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.JS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express.JS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL/Sequelize</span>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg bg-gray-800">
                    <img className="w-full h-90" src={require("../img/portfolio-website.png")} alt=""/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">This Website</div>
                <p className="text-gray-400 text-base">
                    I Coded the website you are on right now!
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TailwindCSS</span>
                </div>
            </div>
            </div>  
            <div className="container flex flex-col sm:flex-row gap-20 mt-20">
        
            <div className="rounded overflow-hidden shadow-lg bg-gray-800">
            <a href="https://awakeapp.info/" target="_blank">
                <img className="w-full" src={require("../img/awake-ss.png")} alt=""/>
            </a>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Awake Landing Page</div>
                <p className="text-gray-400 text-base">
                A landing page I created for an app idea. Clean dark theme.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TailwindCSS</span>
            </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg bg-gray-800">
            <a href="https://github.com/joshgreiff/social-network-api" target="_blank">
                <img className="w-full h-90" src={require("../img/social-api.png")} alt=""/>
            </a>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Social Network API</div>
                <p className="text-gray-400 text-base">
                API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Using Express.js for routing, a MongoDB database, and the Mongoose ODM.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.JS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express.JS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mongoose/MongoDB</span>
            </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg bg-gray-800">
            <a href="https://jayford45.github.io/fit-dish/" target="_blank">
                <img className="w-full h-90" src={require("../img/fit dish.png")} alt=""/>
            </a>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">FitDish</div>
                <p className="text-gray-400 text-base">
                A website created using HTML, JQuery and CSS. It is a website that allows a user to search through an external
                database of recipes using API calls, a list of recipes is returned based on parameters such as calories and protein.
                You can then create a meal plan for the week using jquery drag and droppable elements.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JQuery</span>
            </div>
            </div>
    </div>
    </div>
    )
}