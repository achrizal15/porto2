import { GoPrimitiveDot } from "react-icons/go"
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"


function About() {
    return (
        <div className='gray-50 pb-10 snap-start dark:bg-[#7f7f7f] pt-10 dark:text-gray-100' id="about">
            <h3 className="text-center text-2xl ">ABOUT ME</h3>
            <div className="grid md:grid-cols-12 md:mx-20 mt-20 px-5 md:gap-5">
                <div className="md:col-span-4 flex  relative justify-center">
                    <div className="flex p-4 flex-col bg-white dark:bg-[#6a6a6a] border dark:bg-[#6a6a6a] border-gray-300 dark:border-[#5f5f5f] shadow-lg rounded-md">
                        <div className="h-80 relative border-b  dark:bg-[#6a6a6a] border-gray-300 dark:border-[#5f5f5f] overflow-hidden">
                            <img src="aku.jpg" className="absolute -top-20" alt="aku" />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="align-top">Name</td>
                                    <td className="align-top">:</td>
                                    <td className="align-top">ACH Rizal</td>
                                </tr>
                                <tr>
                                    <td className="align-top">My Birthday</td>
                                    <td className="align-top">:</td><td className="align-top">15 February 2000</td>
                                </tr>
                                <tr>
                                    <td className="align-top">Last Education</td>
                                    <td className="align-top">:</td><td className="align-top">Bachelor of Technology in STIKOM PGRI Banyuwangi</td>
                                </tr>
                                <tr>
                                    <td className="align-top">Contact</td><td className="text-top">:</td>
                                    <td className="flex gap-2 items-center">
                                        <a rel="noreferrer" href="mailto:achrizal15@gmail.com" target="_blank"><AiOutlineMail size={15} /></a>
                                        <a rel="noreferrer" href="https://wa.me/085234104446" target="_blank"><BsWhatsapp size={15} /></a>
                                        <a rel="noreferrer" href="https://github.com/achrizal15" target="_blank">     <BsGithub size={15} /></a>
                                        <a rel="noreferrer" href="https://www.linkedin.com/in/achrizal15/" target="_blank">         <BsLinkedin size={15} /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="md:col-span-8">
                    <div className="mt-5 md:mt-0">
                        <div className="p-2 bg-gray-200 dark:bg-[#6a6a6a] dark:border-[#5f5f5f] border-gray-300 border rounded-t-md flex">
                            <GoPrimitiveDot color="red" size={20} />
                            <GoPrimitiveDot color="yellow" size={20} />
                            <GoPrimitiveDot color="green" size={20} />
                        </div>
                        <div className="w-full shadow-lg bg-white border dark:bg-[#6a6a6a] border-gray-300 dark:border-[#5f5f5f] rounded-b-md p-4">
                            <br />
                            <h3 className="text-xl">Hi :)</h3> <br />
                            <div className="text-justify md:text-lg">
                                ???? I am a technology enthusiast, since I was in SMK until now, I have taken a major related to
                                technology. I am a fresh graduate majoring in informatics engineering, and currently I am pursuing a
                                master's degree in Surabaya. Since 2019 I have been more focused on programming, until now I
                                work in an application development company in Jakarta, and do remote from home.
                                <br /> Thank you ???
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About