import {GithubIcon} from '../Icons/SocialIcons'
import { PythonIcon } from "../Icons/ProjectIcons"


const Test: React.FC<{ name: string}> = ({ name }) => (
    <div className='grid grid-cols-2  sm:visible col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                    justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                    shadow-xl shadow-black/30 sm:p-6 gap-4  sm:gap-10'>
        <h3 className='text-tiny sm:text-xs text-center font-extrabold tracking-tight break-normal text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>{name}</h3>
        <div className='border-none border-green-900 bg-stone-800'>
            <PythonIcon size_min={16} size_standard={32}></PythonIcon>
        </div>
    </div>
)


function Thesis() {
    return (
        <section id='sect_xy_thesis' className='px-4 mb-12 sm:p-0 sm:px-4 md:px-8'> {/** @todo: padding/margin size**/}
            <h2 className='pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className="text-green-700">Szak</span>
                dolgozat
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-8 sm:grid-cols-6 rounded-xl'>
                <div className='grid lg:col-span-4 lg:col-start-2 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-1'>

                    <div className='space-y-2 p-4 rounded-xl border-2 sm:border-none border-green-900 sm:bg-stone-800 shadow-xl shadow-black/30 sm:p-6 md:p-4 lg:p-4'>
                        <h3 className='text-md text-center mb-6 font-extrabold tracking-tight text-stone-200 sm:text-lg'>
                        "Mély tanulás és szövegfeldolgozás alkalmazása a sportfogadásban"
                        </h3>
                        <div className='grid grid-cols-4 gap-x-2'>
                            <div className='flex flex-col col-start-1 place-content-evenly gap-y-2'>
                                <div className=''>
                                    <Test name="Python"></Test>
                                </div>
                                <div className=''>
                                    <Test name="Numpy"></Test>
                                </div>
                                <div className=''>
                                    <Test name="Tensorflow"></Test>
                                </div>
                                <div className=''>
                                    <Test name="Pandas"></Test>
                                </div>
                            </div>
                            <div className='grid grid-rows-5 col-start-2 col-span-3 overflow-hidden border-none border-green-900 bg-stone-900 rounded-xl'>  {/** @todo: cols/rows--> size sm-md-lg **/}
                                <p className='row-span-5 break-all text-md text-left tracking-tight text-stone-200 sm:text-lg sm:px-2 sm:py-4 shadow-xl shadow-black/30'> {/** @todo: word break: break-all for now **/}
                                <h3 className='text-center' >Lorem Ipsum</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices, tortor in finibus gravida, tortor justo luctus lorem, eleifend ultrices sapien lorem sit amet mauris. 
                                Cras aliquet, ipsum sed sagittis aliquet, ligula velit feugiat turpis, ut interdum nunc ligula et tortor. Proin finibus leo nisi. Morbi volutpat massa risus, vitae aliquet urna porta sit amet. 
                                Morbi vestibulum orci turpis, vel maximus risus laoreet sit amet. Maecenas dapibus dui vitae blandit condimentum. Praesent non odio erat. Curabitur molestie vestibulum aliquam.

                                </p>
                            </div>
                        </div>
                        <div className='flex justify-items-end justify-end gap-x-2 border-none border-red-500 border-solid'> {/** @todo: egész**/}
                            <div className='border-none border-green-900'>
                                <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                            </div>
                            <div className='border-none  border-green-900'>
                                <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                            </div>
                            <div className='border-none  border-green-900'>
                                <PythonIcon size_min={16} size_standard={32}></PythonIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </section>
    )
}


export default Thesis 