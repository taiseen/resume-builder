import { useEffect, useState } from 'react'
import InputControl from './InputControl';


const Editor = ({ sections }) => {

    // take 1st key as default active section...
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
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. Frontend Developer'
                />
                <InputControl
                    label='Company Name'
                    placeholder='Enter company name eg. Amazon'
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Certificate Link'
                    placeholder='Enter Certificate Link'
                />
                <InputControl
                    label='Location'
                    placeholder='Enter location eg. Remote'
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
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
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-xl font-bold pt-4'>Enter work description</label>
                <InputControl placeholder='Line 1' />
                <InputControl placeholder='Line 2' />
                <InputControl placeholder='Line 3' />
                <InputControl placeholder='Line 4' />
            </div>

        </div>
    );

    const projectBody = (
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. Chat app'
                />
                <InputControl
                    label='Overview'
                    placeholder='Enter basic overview of project'
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Deploy Link'
                    placeholder='Enter deployed link of project'
                />
                <InputControl
                    label='Github Link'
                    placeholder='Enter github link of project'
                />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-xl font-bold pt-4'>Enter project description</label>
                <InputControl placeholder='Line 1' />
                <InputControl placeholder='Line 2' />
                <InputControl placeholder='Line 3' />
                <InputControl placeholder='Line 4' />
            </div>

        </div>
    );

    const educationBody = (
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. B.Sc in CSE'
                />
                <InputControl
                    label='Collage/School Name'
                    placeholder='Enter name of your collage/school'
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Start Date'
                    type='date'
                    placeholder='Enter start date of this education'
                />
                <InputControl
                    label='End Date'
                    type='date'
                    placeholder='Enter end date of this education'
                />
            </div>

        </div>
    );

    const basicInfoBody = (
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Name'
                    placeholder='Enter your full name eg. Jon Doe'
                />
                <InputControl
                    label='Title'
                    placeholder='Enter your title eg. Frontend Developer'
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Linkedin Link'
                    placeholder='Enter your linkedin profile link'
                />
                <InputControl
                    label='Github Link'
                    placeholder='Enter your github profile link'
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Email'
                    placeholder='Enter your email'
                />
                <InputControl
                    label='Enter phone'
                    placeholder='Enter your phone number'
                />
            </div>

        </div>
    );

    const achievementsBody = (
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-xl font-bold pt-4'>List your achievements</label>
                <InputControl placeholder='Line 1' />
                <InputControl placeholder='Line 2' />
                <InputControl placeholder='Line 3' />
                <InputControl placeholder='Line 4' />
            </div>

        </div>
    );

    const summaryBody = (
        <div className='flex flex-col gap-3'>
            <InputControl
                label='Summary'
                placeholder='Enter your objective/summary' />
        </div>
    );

    const otherBody = (
        <div className='flex flex-col gap-3'>
            <InputControl
                label='Other'
                placeholder='Enter something' />
        </div>
    );


    //  Need Different Different Body 
    //  So Crate A Function 
    //  That Generate Different Different Body   
    const generateBody = () => {

        // dynamically access Object Key's... 
        switch (sections[activeSection]) {

            case sections.basicInfo:
                return basicInfoBody;

            case sections.workExp:
                return workExpBody;

            case sections.project:
                return projectBody;

            case sections.education:
                return educationBody;

            case sections.achievement:
                return achievementsBody;

            case sections.summary:
                return summaryBody;

            case sections.other:
                return otherBody;

            default:
                return null;
        }
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
                            ${activeSection === key && 'border-custom-blue text-custom-blue'}
                            ${i === (Object.keys(sections).length - 1) && 'pr-8'} 
                            ${i === 0 && 'pl-8'} 
                            ${i === 0 && screenSize <= 1023 && 'pl-3'} 
                            ${i === (Object.keys(sections).length - 1) && screenSize <= 1023 && 'pr-4'} 
                            `}>
                            {
                                sections[key]
                            }
                        </div>
                    )
                }
            </div>


            <div className='flex flex-col gap-4 w-full px-4 pb-4'>

                {/* Common Input Field For All Sections */}
                <InputControl label='Title' placeholder='Enter section title' />

                {
                    // generate form body - based on user click...
                    generateBody()
                }

            </div>

        </section>
    )
}

export default Editor