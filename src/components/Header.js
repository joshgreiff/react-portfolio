
export default function Header(){
    return(
        <header>
            <nav className="container flex pt-4 sm:pt-12">
                <div className="poppins text-5xl flex gap-5 uppercase bold mx-2">
                    <h1>Josh Greiff</h1>
                    <i id="burger" className="sm:hidden align-middle text-4xl fa-solid fa-bars mt-1 cursor-pointer"></i>
                    <i id="x" className="hidden fa-solid fa-xmark"></i>
                </div>   
                <ul id="ul" className="justify-end flex-1 gap-10 poppins text-xl hidden sm:flex">
                    <li className="cursor-pointer">
                      <a href="#about">About</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="#my-work">My Work</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <ul id="mobile-menu" className="transition flex flex-col gap-3 text-3xl poppins text-center mt-6 hidden">
              <li className="cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer">
                <a href="#my-work">My Work</a>
              </li>
              <li className="cursor-pointer">
                <a href="#contact">Contact</a>
              </li>
            </ul>
      </header>
    )
}
    