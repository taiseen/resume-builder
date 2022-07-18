// import onlineResume from '../assets/online_resume.svg';
import OnlineResume from './OnlineResume';


const Header = () => {

    return (
        <header className='p-8 text-center w-full h-screen tracking-widest flex flex-col lg:flex-row flex-wrap gap-12 items-center justify-center lg:mb-28'>

            <div className='flex flex-col gap-8 '>
                <p className='mx-auto max-w-2xl text-4xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-900'>
                    A <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700'>Resume</span> that stand out!
                </p>

                <p className='mx-auto max-w-2xl text-4xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-900'>
                    Make your own resume. <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-700'>Its Free</span>
                </p>
            </div>

            <div className='w-full md:w-[700px] md:h-[700px]'>
                {/* <img src={onlineResume} alt="Resume" className='w-full h-full' /> */}
                <OnlineResume color={'#2266EE'} className='w-full h-full'/>
            </div>
            
        </header>
    )
}

export default Header