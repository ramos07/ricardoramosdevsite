import { TypeClientProjectsFields } from "../../types"
import ProjectDescription from "./ProjectDescription"

const ProjectCard = ({ project }: { project: TypeClientProjectsFields }) => {
	return (
		<div className="project_card">
			<div className="project_details">
				<h3 className="project_detail">{project.title}</h3>
				<img
					src={project.image?.fields.file.url}
					alt={project.image?.fields.title}
					className="project-img"
				/>
				<ProjectDescription description={project.description!} />
				<div className="project-links">
					{project.githubLink && <a href={project.githubLink}>Github Link</a>}
					{project.websiteLink && (
						<a
							href={project.websiteLink}
							target="_blank"
							rel="noreferrer nooopener"
						>
							Visit site
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
