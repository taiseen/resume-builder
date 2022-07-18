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


    return (
        <section className='px-4 lg:px-36 pb-8 flex flex-col gap-4 flex-wrap'>
            
            <h1 className='text-center text-3xl lg:text-5xl font-bold border-b border-gray-400 text-gray-800 pb-2 mb-6'>
                Resume Builder
            </h1>

            <div className='flex items-center justify-between flex-wrap flex-col gap-8 md:flex-row'>
                <div className='flex items-center gap-4'>
                    {
                        // color print at UI by the help of loop... 
                        colors.map(color => <div key={color} className={`w-8 h-8 rounded-full shadow ${color} cursor-pointer border-4 border-transparent hover:border-white duration-200`} />)
                    }
                </div>

                <button className='px-5 py-2 bg-blue-400 rounded shadow-lg hover:shadow-none duration-200 flex items-center gap-2 hover:text-white'>
                    <span className='text-xl'>Download</span>
                    <ArrowDown />
                </button>
            </div>

            <Editor sections={sections} />

        </section>
    )
}

export default Body