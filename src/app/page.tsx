'use client' // jika pakai app router (Next.js 13+)

import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import Image from "next/image";


export default function Home() {
    const el = useRef(null)
    const typed = useRef(null)

    useEffect(() => {
        // @ts-ignore
        typed.current = new Typed(el.current, {
            strings: ['Fullstack Developer', 'Backend Engineer', 'Java Developer'],
            typeSpeed: 100,
            backSpeed: 25,
            loop: true,
        })

        return () => {
            // @ts-ignore
            typed.current.destroy()
        }
    },[])

    return (
        <div className="container ">
            <div className="row  pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="bg-dark text-secondary px-4 py-5 ">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <h1 className="display-2 fw-bold lh-1 text-white" data-aos="fade-up">Khairunnisa</h1>
                            <h1 className="h3 fw-bold lh-1" data-aos="fade-up">
                                <p>I'm <span ref={el} className="text-xl font-mono text-blue-600" /></p></h1>
                        </div>
                        <div className="col-lg-4 mx-auto fw-light" data-aos="fade-up">
                            <ul className="list-unstyled ">
                                <li><strong>Address:</strong> Banten, 15144</li>
                                <li><strong>Phone:</strong> +62 813-8560-1299</li>
                                <li><strong>Email:</strong> <a
                                    href="mailto:nissa.khairunnisaaa@gmail.com">nissa.khairunnisaaa@gmail.com</a></li>
                                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/khairunnisa-khairunnisa-83022861"
                                                                  target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/khairunnisa-khairunnisa-83022861</a>
                                </li>
                                <li><strong>GitHub:</strong> <a href="https://www.github.com/khairunnisaa" target="_blank"
                                                                rel="noopener noreferrer">github.com/khairunnisaa</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3" data-aos="fade-left">
                    <h1 className="display-6 fw-bold lh-1">About Me</h1>
                    <p className="lead fw-light">
                        Dynamic and result-oriented Software Engineer with over 10 years of
                        experience specializing in backend and full-stack development. Proven
                        track record of building scalable, efficient systems and leading
                        cross-functional teams to deliver innovative solutions in fintech,
                        e-commerce, and banking domains. Adept at leveraging technologies like
                        Java Spring Boot, PostgreSQL, and Node.js to optimize performance and
                        enhance user experiences. Excels at problem-solving, delivering complex
                        projects under tight deadlines, and continuously learning new development
                        techniques to stay ahead in the fast-evolving tech landscape.
                    </p>

                    <h1 className="display-6 fw-bold lh-1">Technical Expertise:</h1>

                    <ul>
                        <p className="lead fw-light"></p>
                        <li>Languages: Java, JavaScript, PHP</li>
                        <li>Frameworks: Spring Boot, React, Node.js</li>
                        <li>Databases: Oracle, MySQL, PostgreSQL, MongoDB</li>
                        <li>Tools: Git, Docker, Kafka, Nginx, OpenShift</li>
                        <li>Others: HTML, CSS, RESTful APIs, AWS, GCP</li>
                    </ul>
                    <h1 className="display-6 fw-bold lh-1">Soft Skills:</h1>
                    <p className="lead fw-light"></p>
                        <ul>
                            <li>Leadership & Team Collaboration</li>
                            <li>Problem Solving & Critical Thinking</li>
                            <li>Communication & Presentation</li>
                        </ul>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden " data-aos="fade-up">
                    <Image className="rounded-circle border-4 " src="img2.jpeg" alt="" width="700" height="700"/>
                </div>

                <div className="container bg-gradient bg-warning col-xl-10 col-xxl-10 px-4 py-5" data-aos="fade-up">
                    <h4 className="display-6 fw-bold lh-1">Work History</h4>
                    <div className="row align-items-center g-lg-5">
                        <div className="">
                            <h4>Backend Engineer - Java Developer</h4>
                            <h5>Juni 2024 – Present</h5>
                            <p><em>Mandrill Tech (Project MoneyX)</em></p>
                            <ul>
                                <li>Developed the Lead Management module for tracking
                                    submissions across banking, insurance, and e-commerce
                                    categories.
                                </li>
                                <li>Designed and implemented an Admin Dashboard to
                                    provide real-time insights into application statuses and
                                    performance.
                                </li>
                                <li>Created an efficient application approval system to
                                    reduce processing time by 20%.
                                </li>
                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Redis</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">PostgreSQL</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Docker</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">RESTful</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Software Developer - Java</h4>
                            <h5>June 2023 - May 2024</h5>
                            <p><em>AMK Technology Sdn Bhd - Maybank Kuala Lumpur</em></p>
                            <ul>
                                <li>Engineered the Remittance Portal to initiate and process
                                    telegraphic transfers for high-value clients.
                                </li>
                                <li>Integrated the portal with the host core banking system,
                                    achieving 30% faster transaction times.
                                </li>
                                <li>Conducted performance tuning for database queries to
                                    handle peak transaction volumes effectively.
                                </li>
                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">PostgreSQL</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Redis</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kafka</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Apache</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">JavaSwing</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Software Engineer II - Backend</h4>
                            <h5>October 2022- March 2023</h5>
                            <p><em>Moladin Digital Indonesia, Jakarta</em></p>
                            <ul>
                                <li>Designed and implemented a reward and punishment
                                    system dashboard, increasing sales by 10% through
                                    targeted incentives.
                                </li>
                                <li>Created monitoring tools to track the efficiency of sales
                                    teams and marketing campaigns.
                                </li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Node.js</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">PostgreSQL</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Redis</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kafka</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Backend Engineer</h4>
                            <h5>July 2022 - June 2023</h5>
                            <p><em>PT. Infosys Solusi Terpadu , Jakarta , Indonesia
                                Bank CIMB Niaga ( project based ), Tangerang, Indonesia</em></p>
                            <ul>
                                <li>Enhanced the performance and reliability of core
                                    product services, reducing API response time by 15%.
                                </li>
                                <li>Developed a configuration dashboard for Octo Mobile
                                    Banking, simplifying user settings management.
                                </li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Oracle Database</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kubernetes</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">OpenShift</span>
                                </li>
                            </ul>

                            <p><em>Bank BTN - Bale, Tangerang, Indonesia</em></p>
                            <ul>
                                <li>Enhanced the dashboard configuration for mobil banking</li>
                                <li>calculator for loan and payment</li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Oracle Database</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kubernetes</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">OpenShift</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Back End Engineer</h4>
                            <h5>January 2022 - June 2022</h5>
                            <p><em>PT Bank Mandiri Tbk, Jakarta - Sarinah Trading house</em></p>
                            <ul>
                                <li>Built RESTful APIs capable of handling over 10,000
                                    concurrent users.
                                </li>
                                <li>Developed a catalog upload module, enabling sellers to
                                    batch-upload products via Excel, reducing manual input
                                    by 50%
                                </li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">PostgreSQL</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">AWS</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kafka</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Redis</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kubernetes</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">OpenShift</span>
                                </li>
                            </ul>

                            <p><em>Bank BTN - Bale, Tangerang, Indonesia</em></p>
                            <ul>
                                <li>Enhanced the dashboard configuration for mobil banking</li>
                                <li>calculator for loan and payment</li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Oracle Database</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kubernetes</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">OpenShift</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Full Stack Engineer</h4>
                            <h5>January 2019 - December 2021</h5>
                            <p><em>Bank BTPN Tbk, Jakarta Jenius Mobile Business Banking</em></p>
                            <ul>
                                <li>Create report generator to business user, so that user
                                    can download report of their business to excel or pdf
                                </li>
                                <li>Develop seller dashboard module for business user, so</li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">React Native</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Mongodb</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">NodeJs</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Redis</span>
                                </li>
                            </ul>

                            <p><em>JOFIS ( Joint Finance Service )</em></p>
                            <ul>
                                <li>Developed financial reporting dashboards that
                                    increased operational efficiency for business users.</li>
                                <li>Created the SLIK Checking module, integrating credit
                                    scoring data from the Monetary Service Authority using
                                    Kafka.</li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Oracle Database</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kubernetes</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">OpenShift</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Node.js,</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Redis,</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Software Engineer</h4>
                            <h5>May 2018 - December 2018</h5>
                            <p><em>Mitra Integrasi Informatika - Bank BNI Tbk, Jakarta</em></p>
                            <ul>
                                <li>Developed an e-Office application, streamlining internal
                                    document management processes and enabling
                                    real-time collaboration, reducing manual paperwork by
                                    40%.
                                </li>
                                <li>Engineered a Credit Analysis Application to automate
                                    credit scoring and customer risk assessment, improving
                                    loan approval times by 25%.</li>
                                <li>Troubleshot and optimized SQL queries for critical
                                    banking operations.</li>
                                <li>Developed solutions deployed on Google Cloud,
                                    enhancing scalability.</li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">PostgreSQL</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Google Cloud Platform</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Kubernetes</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">OpenShift</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Node.js</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Redis</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Backend Engineer</h4>
                            <h5>January 2017 - April 2018</h5>
                            <p><em>PT FUSI SOLUSI TRANSFORMASI, Jakarta</em></p>
                            <ul>
                                <li>Played a key role in developing the Berau Coal-Hazard
                                    System, an application designed to monitor and
                                    mitigate workplace hazards in coal mining operations,
                                    improving overall safety compliance by 30%.
                                </li>
                                <li>Improved the performance of a high-traffic application
                                    by 40% through query optimization.</li>
                                <li>Collaborated on developing automation tools to
                                    streamline internal processes.</li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">SQL</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Oracle</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Azure</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Junior Programmer Trainer</h4>
                            <h5>September 2016 - January 2017</h5>
                            <p><em>Protalenta Insan Prima - Teknoglobal Multi Integrasi</em></p>
                            <ul>
                                <li>Conducted daily training sessions for over 10 students on
                                    programming fundamentals and real-world applications.
                                </li>
                                <li>Supervised and evaluated individual and group projects.</li>

                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">Java Spring Boot</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Software Engineer </h4>
                            <h5>September 2015 - September 2016</h5>
                            <p><em>PT. INFOMEDIA NUSANTARA, Jakarta</em></p>
                            <ul>
                                <li>Reviewed project specifications and designed
                                    technology solutions that met or exceeded
                                    performance expectations.
                                </li>
                                <li>Worked with software development and testing team
                                    members to design and develop robust solutions to
                                    meet client requirements for functionality, scalability
                                    and performance.</li>
                                <li>Identified and documented project changes with
                                    proactive budget oversight.</li>
                                <li>Conducted regression testing and submitted
                                    observations to development team.</li>
                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">PHP</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Laravel</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">MySQL</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="">
                            <h4>Maintenance Engineer</h4>
                            <h5>October 2014 - September 2015</h5>
                            <p><em>Salingsapa, Jakarta</em></p>
                            <ul>
                                <li>Developed process improvements to increase reliability
                                    and equipment performance.
                                </li>
                                <li>Worked frequently with mechanical and plumbing
                                    systems to complete knowledgeable inspections and
                                    skilled repairs.</li>
                                <li>Diagnosed and resolved machine operation variations
                                    and equipment problems.</li>
                                <li>Diagnosed and resolved machine operation variations
                                    and equipment problems.</li>
                                <li>Conducted cost estimates and performed preventive
                                    maintenance web items.</li>
                                <li>Tools:
                                    <span className="badge rounded-pill text-bg-primary m-1">PHP</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">Laravel</span>
                                    <span className="badge rounded-pill text-bg-primary m-1">MySQL</span>
                                </li>
                            </ul>
                        </div>
                        <hr></hr>
                    </div>
                </div>


                <div className="bg-dark text-secondary px-4 ">
                    <div className="py-5">
                        <div className="col-lg-10 mx-auto">
                            <h1 className=" fw-bold text-white">Education</h1>
                            <p className="fs-5 ">B.Eng: Computer Engineering - Telkom University Bandung,
                                Indonesia ( 2009-09 - 2014-05 )</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
