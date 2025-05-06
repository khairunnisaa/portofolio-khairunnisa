import React from 'react';

const ResumeKhairunnisa: React.FC = () => {
    return (
        <div className="container mt-5">
        <div className="row">
            {/* Sidebar Section */}
            <div className="col-md-4">
                <h2>Khairunnisa</h2>
                <p><strong>Software Engineer</strong></p>
                <ul className="list-unstyled">
                    <li><strong>Address:</strong> Banten, 15144</li>
                    <li><strong>Phone:</strong> +62 813-8560-1299</li>
                    <li><strong>Email:</strong> <a href="mailto:nissa.khairunnisaaa@gmail.com">nissa.khairunnisaaa@gmail.com</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/khairunnisa-83022861/" target="_blank" rel="noopener noreferrer">View Profile</a></li>
                    <li><strong>GitHub:</strong> <a href="https://www.github.com/khairunnisaa" target="_blank" rel="noopener noreferrer">github.com/khairunnisaa</a></li>
                </ul>

                <h5 className="mt-4">Technical Skills</h5>
                <ul>
                    <li>Languages: Java, JavaScript, PHP</li>
                    <li>Frameworks: Spring Boot, React, Node.js</li>
                    <li>Databases: Oracle, MySQL, PostgreSQL, MongoDB</li>
                    <li>Tools: Git, Docker, Kafka, Nginx, OpenShift</li>
                    <li>Others: HTML, CSS, RESTful APIs, AWS, GCP</li>
                </ul>
                <h5>Languages</h5>
                <ul>
                    <li>Bahasa Indonesia (Fluent)</li>
                    <li>English (Proficient)</li>
                </ul>
            </div>

    {/* Main Section */}
            <div className="col-md-8">
                <h4 className="mb-3">Professional Summary</h4>
                <p>
                    Dynamic and result-oriented Software Engineer with 10+ years of experience in backend and full-stack
                    development, specializing in scalable systems for fintech, banking, and e-commerce sectors.
                </p>

                <h4 className="mt-4">Work Experience</h4>
                <div>
                    <h5>Backend Engineer - Java</h5>
                    <p><em>Mandrill Tech (MoneyX) | Jun 2024 – Present</em></p>
                    <ul>
                        <li>Developed Lead Management & Admin Dashboard modules</li>
                        <li>Reduced processing time by 20% with optimized approval flows</li>
                        <li><strong>Tools:</strong> Java Spring Boot, PostgreSQL, Redis, Docker</li>
                    </ul>
                </div>
                <div>
                    <h5>Software Developer - Java</h5>
                    <p><em>AMK Technology (Maybank) | Jun 2023 – May 2024</em></p>
                    <ul>
                        <li>Built Remittance Portal integrated with core banking</li>
                        <li>Improved transaction speed by 30%</li>
                    </ul>
                </div>
                <div>
                    <h5>Software Engineer II - Backend</h5>
                    <p><em>Moladin Digital Indonesia | Oct 2022 – Mar 2023</em></p>
                    <ul><li>Designed sales reward-punishment dashboard increasing sales 10%</li>
                        <li><strong>Stack:</strong> Node.js, PostgreSQL, Redis, Kafka</li>
                    </ul>
                </div>

    {/* Add more entries as needed */}

                <h4 className="mt-4">Education</h4><p>
                <strong>B.Eng in Computer Engineering</strong><br />Telkom University, Bandung (2009 – 2014)</p>
            </div>
        </div>
    </div>
    )};
export default ResumeKhairunnisa;
