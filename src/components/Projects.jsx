const projectsDetail = [
  { name: "WCDBasisdata", image: 'wcdbasisdata.png' },
  { name: "SelangMas", image: 'selangmas.png' },
  { name: "SigmaAtk", image: 'sigmaatk.png' },
  { name: "AnsonHouse", image: 'ansonhouse.png' },
  { name: "Bahasa Basudara", image: 'bahasabasudara.png' },
  { name: "Elearning Sachio", image: 'elearningsachio.png' },
  { name: "Heyvapeindo", image: 'heyvapeindo.png' },
  { name: "Mitrajaya Walpaper", image: 'mitrajayawalpaper.png' },
]

function Projects() {
  return (
    <div className='bg-[#e9d5a1] pb-10 dark:text-white snap-start dark:bg-gray-900 pt-10' id="projects">
      <h3 className="text-center text-2xl">PROJECTS</h3>
      <div className="flex gap-x-20 justify-start mx-16 gap-10 flex-wrap mt-20">
        {
          projectsDetail.map((v, k) => {
            return (
              <div className="p-4 dark:bg-gray-800 hover:scale-105 transition duration-300 bg-white text-center shadow-md hover:shadow-2xl  overflow-hidden" key={k}>
                <div className="w-52 mb-5 h-28 overflow-hidden">
                  <img src={`projects/${v.image}`} className="h-32" alt="" loading="lazy" />
                </div>
                <span className="text-lg font-bold">{v.name}</span>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}
export default Projects