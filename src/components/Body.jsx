import { useEffect, useState } from 'react';
import { ArrowDown } from 'react-feather'
import { Editor } from '.'


const Body = () => {

    const colors = ['bg-blue-600', 'bg-gray-500', 'bg-green-700', 'bg-orange-700', 'bg-indigo-600', 'bg-lime-600',];

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
    };

    // base empty user info object, all related info store here...
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle: sections.achievement,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: "",
        },
    })


    useEffect(() => {
        // console.log(resumeInformation);
    }, [resumeInformation])


    return (
        <section className='px-4 lg:px-36 pb-8 flex flex-col gap-4 flex-wrap '>

            <h1 className='text-center text-3xl lg:text-5xl font-bold border-b border-gray-400 text-gray-800 pb-2 mb-6'>
                Resume Builder
            </h1>

            <div className='flex items-center justify-between flex-wrap flex-col gap-8 md:flex-row'>
                <div className='flex items-center gap-4'>
                    {
                        // color print at UI by the help of loop... 
                        colors.map(color =>
                            <div
                                key={color}
                                className={`${color} w-8 h-8 rounded-full shadow cursor-pointer border-4 border-transparent hover:border-white duration-200`}
                            />
                        )
                    }
                </div>

                <button className='px-5 py-2 bg-blue-400 rounded shadow-lg hover:shadow-none duration-200 flex items-center gap-2 hover:text-white'>
                    <span className='text-xl'>Download</span>
                    <ArrowDown />
                </button>
            </div>

            <Editor
                sections={sections}
                resumeInformation={resumeInformation}
                setResumeInformation={setResumeInformation}
            />

        </section>
    )
}

export default Body