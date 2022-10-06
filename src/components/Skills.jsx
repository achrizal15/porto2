import {FaDocker,FaReact,FaHtml5,FaSass,FaLaravel,FaPython,FaPhp,FaNodeJs} from "react-icons/fa"
import {SiNextdotjs,SiCss3,SiCodeigniter,SiFlask,SiDjango,SiMysql,SiMongodb,SiRedux,SiJavascript} from "react-icons/si"


function Skills() {
    return (
        <div className='gray-50 pb-10 snap-start dark:bg-[#7f7f7f] text-gray-900 pt-10 dark:text-gray-100' id="Skills">
            <h3 className="text-center text-2xl ">SKILLS</h3>
            <div className="flex justify-start md:mx-40 gap-x-5 mx-8 gap-y-5 flex-wrap mt-20">
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <FaPython size={50}/>
                    <span>Python</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiJavascript size={50}/>
                    <span>Javascript</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiMysql size={50}/>
                    <span>Mysql</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiMongodb size={50}/>
                    <span>Mongodb</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <FaNodeJs size={50}/>
                    <span>NodeJs</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <FaPhp size={50}/>
                    <span>Php</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <FaDocker size={50}/>
                    <span>Docker</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <FaReact size={50}/>
                    <span>ReactJs</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiRedux size={50}/>
                    <span>Redux</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <FaHtml5 size={50}/>
                    <span>Html5</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiCss3 size={50}/>
                    <span>Css3</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <FaSass size={50}/>
                    <span>Sass</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-lg dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <FaLaravel size={50}/>
                    <span>Laravel</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-2xl dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiNextdotjs size={50}/>
                    <span>NextJs</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-2xl dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiCodeigniter size={50}/>
                    <span>Codeigniter</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-2xl dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiFlask size={50}/>
                    <span>Flask</span>
                </div>
                <div className="h-24 w-24 rounded-lg shadow-2xl dark:bg-[#6a6a6a] justify-center items-center flex flex-col">
                    <SiDjango size={50}/>
                    <span>Django</span>
                </div>
            </div>
        </div>
    )
}
export default Skills