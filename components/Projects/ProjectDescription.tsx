import { useState } from "react"

const ProjectDescription = ({ description }: { description: string }) => {
	const [showAll, setShowAll] = useState(false) // Determines wether to truncate or expand the project description

	let limit = 150
	var truncatedDescription = description.substring(0, limit)

	if (showAll) {
		return (
			<p className="project-description">
				{description}&nbsp;<a onClick={() => setShowAll(false)}>Read Less</a>
			</p>
		)
	} else {
		return (
			<p className="project-description">
				{truncatedDescription + "..."}&nbsp;
				<a onClick={() => setShowAll(true)}>Read More</a>
			</p>
		)
	}
}

export default ProjectDescription
