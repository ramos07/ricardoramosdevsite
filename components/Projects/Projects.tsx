import ProjectCard from "./ProjectCard"

const Projects = () => {
	return (
		<section id="projects" className="projects_section">
			<h2>Projects</h2>
			<div className="projects_deck">
				<ProjectCard />
				<ProjectCard />
			</div>
		</section>
	)
}

export default Projects
