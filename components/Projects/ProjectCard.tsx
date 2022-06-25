const ProjectCard = () => {
	return (
		<div className="project_card">
			<div className="project_details">
				<h3 className="project_detail">Title of Project</h3>
				<img
					src="https://images.ctfassets.net/cuabzyzk0str/71jEh9Jwv697dZ6pbEg99i/9d8ac3c47cb60d93f9a09f9f64579bd4/880492e662c74d8ce2430109d57b9241.gif"
					alt=""
					className="project-img"
				/>
				<p className="project_description">
					A description of the project. What was the problem and what did you do
					with tech to solve that problem. What did you use to resolve the
					issue.
				</p>
			</div>
		</div>
	)
}

export default ProjectCard
