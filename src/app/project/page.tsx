import Link from "next/link";

const projects = [
    { slug: "moneyx-dashboard", title: "MoneyX Admin Dashboard" },
    { slug: "remittance-portal", title: "Maybank Remittance Portal" },
];

export default function Projects() {
    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.slug}>
                        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
