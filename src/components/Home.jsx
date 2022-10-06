import { useContext } from "react"
import { AppContext } from "../App"
import { ACTION_REDUCER_MODE } from "../constans"
import { FaLaptopCode } from "react-icons/fa"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

function Home() {
  const { appMode, dispatch } = useContext(AppContext)
  const changeMode = () => {
    dispatch({ type: ACTION_REDUCER_MODE.CHANGE_MODE, payload: !appMode.darkmode })
  }
  return (
    <div className='bg-[#e9d5a1] h-screen dark:bg-gray-900 flex justify-center items-center snap-start' id="home">
      <div className="flex justify-center items-center flex-col">
        <FaLaptopCode size={150} className="text-gray-800 dark:text-[#e9d5a1]" />
        <h3 className="text-3xl font-bold text-gray-800 dark:text-[#e9d5a1]">
          <Typewriter words={["Hi, I'm ACH Rizal", "I'm a Web Developer"]} loop cursor delaySpeed={3000} />
        </h3>
        <div className="flex justify-center">
          <img onClick={() => changeMode()} src={`${appMode.darkmode ? "sunny.png" : "moon.png"}`} width={50} alt="moon" className="shadow-lg rounded-full mt-5" />

        </div>
      </div>
      <div className="absolute bottom-5">
        <ul className="flex gap-5 dark:text-[#e9d5a1]">
          <li className="cursor-pointer"><Link to="about"
            spy={true}
            smooth={true}
            hashSpy={true} duration={1000}>About</Link>
          </li>
          <li className="cursor-pointer"><Link to="projects"
            spy={true}
            smooth={true}
            hashSpy={true} duration={1000}>Projects</Link>
          </li>
          <li className="cursor-pointer"><Link to="Skills"
            spy={true}
            smooth={true}
            hashSpy={true} duration={1000}>Skills</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Home