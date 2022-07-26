import { useEffect, useState } from 'react'
import { X } from 'react-feather';
import InputControl from './InputControl';


const Editor = ({ sections, resumeInformation, setResumeInformation }) => {

    // take 1st key as default active section...
    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);
    const [screenSize, setScreenSize] = useState(0);
    const [activeInformation, setActiveInformation] = useState(
        resumeInformation[sections[Object.keys(sections)[0]]]
    );
    // for default title selected...
    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);
    // default chip selection
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);

    // user basic info section values... 
    const [values, setValues] = useState({
        name: activeInformation?.details?.name || '',
        title: activeInformation?.details?.title || '',
        linkedin: activeInformation?.details?.linkedin || '',
        github: activeInformation?.details?.github || '',
        phone: activeInformation?.details?.phone || '',
        email: activeInformation?.details?.email || '',
    })

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

    useEffect(() => {

        const activeInfo = resumeInformation[sections[activeSectionKey]]
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey]);
        setActiveDetailIndex(0) // reset 
        setValues({
            name: activeInfo?.detail?.name || '',

            title: activeInfo?.details
                ? activeInfo?.details[0]?.title || ''
                : activeInfo?.detail?.title || '',

            github: activeInfo?.details
                ? activeInfo?.details[0]?.github || ''
                : activeInfo?.detail?.github || '',

            linkedin: activeInfo?.detail?.linkedin || '',
            phone: activeInfo?.detail?.phone || '',
            email: activeInfo?.detail?.email || '',

            summary: typeof activeInfo?.detail !== Object ? activeInfo.detail : '',
            other: typeof activeInfo?.detail !== Object ? activeInfo.detail : '',

            overview: activeInfo?.details
                ? activeInfo.details[0]?.overview || ''
                : '',

            link: activeInfo?.details
                ? activeInfo.details[0]?.link || ''
                : '',

            certificationLink: activeInfo?.details
                ? activeInfo.details[0]?.certificationLink || ''
                : '',

            companyName: activeInfo?.details
                ? activeInfo.details[0]?.companyName || ''
                : '',

            location: activeInfo?.details
                ? activeInfo.details[0]?.location || ''
                : '',

            startDate: activeInfo?.details
                ? activeInfo.details[0]?.startDate || ''
                : '',

            endDate: activeInfo?.details
                ? activeInfo.details[0]?.endDate || ''
                : '',

            points: activeInfo?.details
                ? activeInfo.details[0]?.points
                    ? [...activeInfo.details[0]?.points]
                    : ''
                : activeInfo?.points
                    ? [...activeInfo.points]
                    : '',
        })
    }, [activeInformation, resumeInformation, activeSectionKey, sections])

    useEffect(() => {
        const details = activeInformation?.details;
        if (!details) return;

        const activeInfo = resumeInformation[sections[activeSectionKey]];

        // when new chip add for new value, previous values are going to clear...
        setValues({
            title: activeInfo.details[activeDetailIndex]?.title || '',
            github: activeInfo.details[activeDetailIndex]?.github || '',
            linkedin: activeInfo.details[activeDetailIndex]?.linkedin || '',
            link: activeInfo.details[activeDetailIndex]?.link || '',
            overview: activeInfo.details[activeDetailIndex]?.overview || '',
            certificationLink: activeInfo.details[activeDetailIndex]?.certificationLink || '',
            location: activeInfo.details[activeDetailIndex]?.location || '',
            companyName: activeInfo.details[activeDetailIndex]?.companyName || '',
            startDate: activeInfo.details[activeDetailIndex]?.startDate || '',
            endDate: activeInfo.details[activeDetailIndex]?.endDate || '',
            points: activeInfo.details[activeDetailIndex]?.points || '',
            college: activeInfo.details[activeDetailIndex]?.college || '',
        });
    }, [activeDetailIndex])


    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values }
        // if points not present, its automatically create it...
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
    }


    // by user click, data save/store function
    const handleSubmit = () => {

        switch (sections[activeSectionKey]) {

            case sections.basicInfo: {
                // creating new object by new info
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone,
                };
                // update existing database by newly created object
                setResumeInformation(pre => ({
                    ...pre,
                    [sections.basicInfo]: {
                        ...pre[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle
                    }
                }));
                break;
            }

            case sections.workExp: {
                // creating new object by new info
                const tempDetail = {
                    certificationLink: values.certificationLink,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    companyName: values.companyName,
                    location: values.location,
                    points: values.points,
                };

                // Dealings With [Array] Update
                // 🟡🟡🟡 for chip data manipulation 🟡🟡🟡
                const tempDetails = [...resumeInformation[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                // update existing database by newly created object
                setResumeInformation(pre => ({
                    ...pre,
                    [sections.workExp]: {
                        ...pre[sections.workExp],
                        details: tempDetails,
                        sectionTitle
                    }
                }));
                break;
            }

            case sections.project: {
                // creating new object by new info
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,
                };

                // Dealings With [Array] Update
                // 🟡🟡🟡 for chip data manipulation 🟡🟡🟡
                const tempDetails = [...resumeInformation[sections.project]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                // update existing database by newly created object
                setResumeInformation(pre => ({
                    ...pre,
                    [sections.project]: {
                        ...pre[sections.project],
                        details: tempDetails,
                        sectionTitle
                    }
                }));
                break;
            }

            case sections.education: {
                // creating new object by new info
                const tempDetail = {
                    title: values.title,
                    college: values.college,
                    startDate: values.startDate,
                    endDate: values.endDate,
                };

                // Dealings With [Array] Update
                // 🟡🟡🟡 for chip data manipulation 🟡🟡🟡
                const tempDetails = [...resumeInformation[sections.education]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                // update existing database by newly created object
                setResumeInformation(pre => ({
                    ...pre,
                    [sections.education]: {
                        ...pre[sections.education],
                        details: tempDetails,
                        sectionTitle
                    }
                }));
                break;
            }

            case sections.achievement: {
                // creating new object by new info
                const tempPoints = values.points;

                // update existing database by newly created object
                setResumeInformation(pre => ({
                    ...pre,
                    [sections.achievement]: {
                        ...pre[sections.achievement],
                        points: tempPoints,
                        sectionTitle
                    }
                }));
                break;
            }

            case sections.summary: {
                // creating new object by new info
                const tempDetail = values.summary;

                // update existing database by newly created object
                setResumeInformation(pre => ({
                    ...pre,
                    [sections.summary]: {
                        ...pre[sections.summary],
                        detail: tempDetail,
                        sectionTitle
                    }
                }));
                break;
            }

            case sections.other: {
                // creating new object by new info
                const tempDetail = values.other;

                // update existing database by newly created object
                setResumeInformation(pre => ({
                    ...pre,
                    [sections.other]: {
                        ...pre[sections.other],
                        detail: tempDetail,
                        sectionTitle
                    }
                }));
                break;
            }

            default:
                console.log(values)
                return null;
        }
    }


    // + New | Experience add button logic...
    const handleAddMoreChip = () => {
        const details = activeInformation?.details;
        if (!details) return;

        // get last element from an [array]
        const lastDetail = details.slice(-1)[0];
        // if last element is empty, then do not add new element...
        if (!Object.keys(lastDetail).length) return;

        details.push({});

        // nested element access...
        setResumeInformation(pre => ({
            ...pre,
            [sections[activeSectionKey]]: {
                ...resumeInformation[sections[activeSectionKey]],
                details: details,  // update this details [array] inside this object
            }
        }))
        setActiveDetailIndex(details?.length - 1);
    }


    const handleDeleteChip = (index) => {
        const details = activeInformation?.details
            ? [...activeInformation?.details]
            : ''
        if (!details) return;
        details.splice(index, 1); // remove that specific element from [array]

        // nested element access...
        setResumeInformation(pre => ({
            ...pre,
            [sections[activeSectionKey]]: {
                ...resumeInformation[sections[activeSectionKey]],
                details: details, // update this details [array] inside this object
            }
        }))
        setActiveDetailIndex(pre => (pre === index ? 0 : pre - 1));
    }



    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // Only JSX Body by function calling | Start 
    // Static Body
    const workExpBody = (
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. Frontend Developer'
                    value={values.title}
                    onChange={e => setValues(pre => ({ ...pre, title: e.target.value }))}
                />
                <InputControl
                    label='Company Name'
                    placeholder='Enter company name eg. Amazon'
                    value={values.companyName}
                    onChange={e => setValues(pre => ({ ...pre, companyName: e.target.value }))}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Certificate Link'
                    placeholder='Enter Certificate Link'
                    value={values.certificationLink}
                    onChange={e => setValues(pre => ({ ...pre, certificationLink: e.target.value }))}
                />
                <InputControl
                    label='Location'
                    placeholder='Enter location eg. Remote'
                    value={values.location}
                    onChange={e => setValues(pre => ({ ...pre, location: e.target.value }))}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Start Date'
                    type='date'
                    placeholder='Enter start date of work'
                    value={values.startDate}
                    onChange={e => setValues(pre => ({ ...pre, startDate: e.target.value }))}
                />
                <InputControl
                    label='End Date'
                    type='date'
                    placeholder='Enter end date of work'
                    value={values.endDate}
                    onChange={e => setValues(pre => ({ ...pre, endDate: e.target.value }))}
                />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-xl font-bold pt-4'>Enter work description</label>
                <InputControl
                    placeholder='Line 1'
                    value={values.points ? values.points[0] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 0)}
                />
                <InputControl
                    placeholder='Line 2'
                    value={values.points ? values.points[1] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 1)}
                />
                <InputControl
                    placeholder='Line 3'
                    value={values.points ? values.points[2] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 2)}
                />
            </div>

        </div>
    );

    const projectBody = (
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. Chat app'
                    value={values.title}
                    onChange={e => setValues(pre => ({ ...pre, title: e.target.value }))}
                />
                <InputControl
                    label='Overview'
                    placeholder='Enter basic overview of project'
                    value={values.overview}
                    onChange={e => setValues(pre => ({ ...pre, overview: e.target.value }))}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Deploy Link'
                    placeholder='Enter deployed link of project'
                    value={values.link}
                    onChange={e => setValues(pre => ({ ...pre, link: e.target.value }))}
                />
                <InputControl
                    label='Github Link'
                    placeholder='Enter github link of project'
                    value={values.github}
                    onChange={e => setValues(pre => ({ ...pre, github: e.target.value }))}
                />
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-xl font-bold pt-4'>Enter project description</label>
                <InputControl
                    placeholder='Line 1'
                    value={values.points ? values.points[0] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 0)}
                />
                <InputControl
                    placeholder='Line 2'
                    value={values.points ? values.points[1] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 1)}
                />
                <InputControl
                    placeholder='Line 3'
                    value={values.points ? values.points[2] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 2)}
                />
                <InputControl
                    placeholder='Line 4'
                    value={values.points ? values.points[3] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 3)}
                />
            </div>

        </div>
    );

    const educationBody = (
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Title'
                    placeholder='Enter title eg. B.Sc in CSE'
                    value={values.title}
                    onChange={e => setValues(pre => ({ ...pre, title: e.target.value }))}
                />
                <InputControl
                    label='college/School Name'
                    placeholder='Enter name of your college/school'
                    value={values.college}
                    onChange={e => setValues(pre => ({ ...pre, college: e.target.value }))}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Start Date'
                    type='date'
                    placeholder='Enter start date of this education'
                    value={values.startDate}
                    onChange={e => setValues(pre => ({ ...pre, startDate: e.target.value }))}
                />
                <InputControl
                    label='End Date'
                    type='date'
                    placeholder='Enter end date of this education'
                    value={values.endDate}
                    onChange={e => setValues(pre => ({ ...pre, endDate: e.target.value }))}
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
                    value={values.name}
                    onChange={e => setValues(pre => ({ ...pre, name: e.target.value }))}
                />
                <InputControl
                    label='Title'
                    placeholder='Enter your title eg. Frontend Developer'
                    value={values.title}
                    onChange={e => setValues(pre => ({ ...pre, title: e.target.value }))}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Linkedin Link'
                    placeholder='Enter your linkedin profile link'
                    value={values.linkedin}
                    onChange={e => setValues(pre => ({ ...pre, linkedin: e.target.value }))}
                />
                <InputControl
                    label='Github Link'
                    placeholder='Enter your github profile link'
                    value={values.github}
                    onChange={e => setValues(pre => ({ ...pre, github: e.target.value }))}
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <InputControl
                    label='Email'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={e => setValues(pre => ({ ...pre, email: e.target.value }))}
                />
                <InputControl
                    label='Enter phone'
                    placeholder='Enter your phone number'
                    value={values.phone}
                    onChange={e => setValues(pre => ({ ...pre, phone: e.target.value }))}
                />
            </div>

        </div>
    );

    const achievementsBody = (
        <div className='flex flex-col gap-3'>

            <div className='flex flex-col gap-3'>
                <label htmlFor="" className='text-xl font-bold'>List your achievements</label>
                <InputControl
                    placeholder='Line 1'
                    value={values.points ? values.points[0] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 0)}
                />
                <InputControl
                    placeholder='Line 2'
                    value={values.points ? values.points[1] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 1)}
                />
                <InputControl
                    placeholder='Line 3'
                    value={values.points ? values.points[2] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 2)}
                />
                <InputControl
                    placeholder='Line 4'
                    value={values.points ? values.points[3] : ''}
                    onChange={e => handlePointUpdate(e.target.value, 3)}
                />
            </div>

        </div>
    );

    const summaryBody = (
        <div className='flex flex-col gap-3'>
            <InputControl
                label='Summary'
                placeholder='Enter your objective/summary'
                value={values.summary}
                onChange={e => setValues(pre => ({ ...pre, summary: e.target.value }))}
            />
        </div>
    );

    const otherBody = (
        <div className='flex flex-col gap-3'>
            <InputControl
                label='Other'
                placeholder='Enter something'
                value={values.other}
                onChange={e => setValues(pre => ({ ...pre, other: e.target.value }))}
            />
        </div>
    );

    // JSX Body | End
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
    // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨



    //  Need Different Different Body 
    //  So Crate A Function 
    //  That Generate Different Different Body   
    const generateBody = () => {

        // dynamically access Object Key's... 
        switch (sections[activeSectionKey]) {

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
        <section className='w-full lg:w-[950px]  min-h-[450px] flex flex-col gap-7 items-center mt-12 rounded mx-auto border border-gray-400'>

            {/* Header Title */}
            <div className='flex flex-col lg:flex-row items-center flex-wrap overflow-x-auto border-b border-gray-400'>
                {
                    // loop inside an Object & print its values at UI
                    Object.keys(sections).map((key, i) =>
                        <div
                            key={i}
                            // user currently click on a specific section...
                            onClick={() => setActiveSectionKey(key)}
                            className={`p-4 border-b-2 border-transparent font-bold whitespace-nowrap text-xl cursor-pointer 
                            ${activeSectionKey === key && 'border-custom-blue text-custom-blue'}
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
                <InputControl
                    label='Section Title'
                    placeholder='Enter section title'
                    value={sectionTitle}
                    onChange={e => setSectionTitle(e.target.value)}
                />

                {/* 🟡🟡🟡 Chips 🟡🟡🟡 */}
                <div className='flex gap-2 flex-wrap flex-col items-center md:flex-row'>
                    {
                        activeInformation?.details
                            ? activeInformation?.details?.map((item, i) =>
                                <div
                                    key={i}
                                    className={`${activeDetailIndex === i ? 'bg-blue-500' : 'bg-gray-500'} px-3 py-1 rounded flex w-fit cursor-pointer text-white`}
                                    onClick={() => setActiveDetailIndex(i)}
                                >
                                    <p>{sections[activeSectionKey]} - {i + 1}</p> &nbsp;
                                    <X
                                        onClick={(e) => { e.stopPropagation(); handleDeleteChip(i) }}
                                        className='pl-1 hover:text-red-800 duration-200'
                                    />
                                </div>
                            )
                            : ''
                    }
                    {
                        // more experience add button...
                        activeInformation?.details &&
                        activeInformation?.details?.length > 0 &&
                        <button
                            onClick={handleAddMoreChip}
                            className='bg-blue-300 px-4 py-1 rounded hover:text-white hover:bg-blue-500 duration-200 cursor-pointer active:translate-y-1'>
                            + New
                        </button>
                    }
                </div>
                {
                    // generate input form body - based on user click...
                    generateBody()
                }

                <button
                    className='ml-auto px-4 py-1.5 rounded w-fit text-xl bg-blue-400 active:translate-y-1 duration-200 hover:text-white'
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>

        </section>
    )
}

export default Editor