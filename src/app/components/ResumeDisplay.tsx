import React, { useEffect, useState } from 'react';

interface ResumeData {
    name: string;
    title: string;
    contact: {
        address: string;
        phone: string;
        email: string;
        linkedin: string;
        github: string;
    };
    summary: string;
    skills: {
        [key: string]: string[];
    };
    languagesSpoken: {
        [key: string]: string;
    };
    education: {
        degree: string;
        institution: string;
        location: string;
        period: string;
    };
    experience: {
        role: string;
        company: string;
        location: string;
        period: string;
        responsibilities: string[];
        tools: string[];
    }[];
}

const ResumeDisplay: React.FC = () => {
    const [resume, setResume] = useState<ResumeData | null>(null);
    const [search, setSearch] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const fetchResume = async () => {
            const res = await fetch('/api/resume');
            const data: ResumeData = await res.json();
            setResume(data);
        };
        fetchResume();
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    if (!resume) return <p className="text-center mt-10">Loading resume...</p>;

    const filteredExperience = resume.experience.filter((job) =>
        search === '' ||
        job.role.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.tools.some((tool) => tool.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-1">{resume.name}</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">{resume.title}</p>
                    </div>
                    <div className="space-x-2">
                        <input
                            type="text"
                            placeholder="Search experience..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border rounded px-3 py-1 text-sm dark:bg-gray-800 dark:text-white"
                        />
                        <button
                            onClick={toggleDarkMode}
                            className="border rounded px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700"
                        >
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <button
                            onClick={() => window.print()}
                            className="border rounded px-3 py-1 text-sm bg-blue-500 text-white"
                        >
                            Print PDF
                        </button>
                    </div>
                </div>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                    <ul className="space-y-1">
                        <li><strong>Email:</strong> {resume.contact.email}</li>
                        <li><strong>Phone:</strong> {resume.contact.phone}</li>
                        <li><strong>LinkedIn:</strong> <a href={resume.contact.linkedin}
                                                          className="text-blue-600 underline"
                                                          target="_blank">{resume.contact.linkedin}</a></li>
                        <li><strong>GitHub:</strong> <a href={resume.contact.github} className="text-blue-600 underline"
                                                        target="_blank">{resume.contact.github}</a></li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                    <p>{resume.summary}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(resume.skills).map(([category, skills]) => (
                            <div key={category}>
                                <h3 className="font-medium mb-1 text-gray-700 dark:text-gray-200">{category}</h3>
                                <ul className="list-disc list-inside text-sm">
                                    {skills.map((skill) => <li key={skill}>{skill}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Languages</h2>
                    <ul className="list-disc list-inside text-sm">
                        {Object.entries(resume.languagesSpoken).map(([lang, level]) => (
                            <li key={lang}><strong>{lang}:</strong> {level}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Education</h2>
                    <p>
                        <strong>{resume.education.degree}</strong><br/>
                        {resume.education.institution}, {resume.education.location}<br/>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{resume.education.period}</span>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                    {filteredExperience.map((job, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-medium">{job.role}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{job.company} | {job.location} | {job.period}</p>
                            <ul className="list-disc list-inside mt-2 text-sm">
                                {job.responsibilities.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                            <p className="mt-2 text-sm"><strong>Tools:</strong> {job.tools.join(', ')}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ResumeDisplay;
