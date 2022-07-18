import { useEffect, useState } from 'react'
import InputControl from './InputControl';


const Editor = ({ sections }) => {

    // take 1st key as default active sections
    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);
    const [screenSize, setScreenSize] = useState(0);


    // this useEffect is responsible only for ==> 
    // set browser window width size 
    useEffect(() => {
        // figure out or set user screen size initially... 
        const handleResize = () => setScreenSize(window.innerWidth);

        // track all of the resize options
        window.addEventListener('resize', handleResize);

        // figure out initial width...
        handleResize();

        // after finishing work, remove event listener...
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Static Body
    const workExpBody = (
        <div className='details'>

            <div className='row'>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. Frontend Developer'
                />
                <InputControl
                    label='Company Name'
                    placeholder='Enter company name eg. Amazon'
                />
            </div>
            <div className='row'>
                <InputControl
                    label='Certificate Link'
                    placeholder='Enter Certificate Link'
                />
                <InputControl
                    label='Location'
                    placeholder='Enter location eg. Remote'
                />
            </div>
            <div className='row'>
                <InputControl
                    label='Start Date'
                    type='date'
                    placeholder='Enter start date of work'
                />
                <InputControl
                    label='End Date'
                    type='date'
                    placeholder='Enter end date of work'
                />
            </div>
            <div className='col'>
                <label htmlFor="">Enter work description</label>
                <InputControl placeholder='Line 1' />
                <InputControl placeholder='Line 2' />
                <InputControl placeholder='Line 3' />
                <InputControl placeholder='Line 4' />
            </div>

        </div>
    );

    // const workExpBody = ();
    // const workExpBody = ();
    // const workExpBody = ();
    // const workExpBody = ();
    // const workExpBody = ();
    // const workExpBody = ();
    // const workExpBody = ();



    //  Need Different Different Body 
    //  So Crate A Function 
    //  That Generate Different Different Body   
    const generateBody = () => {

    }

    return (
        <section className='w-full lg:w-fit min-h-[450px] flex flex-col gap-7 items-center mt-12 rounded mx-auto border border-gray-400'>

            {/* Header Title */}
            <div className='flex flex-col lg:flex-row items-center flex-wrap overflow-x-auto border-b border-gray-400'>
                {
                    // loop inside an Object & print its values at UI
                    Object.keys(sections).map((key, i) =>
                        <div
                            key={i}
                            onClick={() => setActiveSection(key)}
                            className={`p-4 border-b-2 border-transparent font-bold whitespace-nowrap text-xl cursor-pointer 
                            ${activeSection === key && 'border-[#239CE2] text-[#239CE2]'}
                            ${i === (Object.keys(sections).length - 1) && 'pr-8'} 
                            ${i === 0 && screenSize <= 1023 && 'pl-[16px]'} 
                            ${i === 0 && 'pl-8'} 
                            ${i === (Object.keys(sections).length - 1) && screenSize <= 1023 && 'pr-4'} 
                            `}>
                            {
                                sections[key]
                            }
                        </div>
                    )
                }
            </div>


            <div className='flex flex-col gap-4'>

                <InputControl label='Title' placeholder='Enter section title' />

            </div>

        </section>
    )
}

export default Editor