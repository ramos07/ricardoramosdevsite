import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"
import contentfulClient from "../Contentful/contentful"
import { TypeClientProjectsFields } from "../../types"

const Projects = (props: any) => {
	const [projects, setProjects] = useState<TypeClientProjectsFields[]>([])
	useEffect(() => {
		async function getItems() {
			let arr: any = []
			const items = await contentfulClient
				.getEntries<TypeClientProjectsFields>({
					content_type: "clientProjects",
				})
				.then((res) => {
					res.items.forEach((p) => {
						arr.push(p.fields)
					})
				})
			setProjects(arr)
		}
		getItems()
	}, [])
	return (
		<section id="projects" className="projects_section">
			<h2>Projects</h2>
			<div className="projects_deck">
				{projects &&
					projects.map((p: TypeClientProjectsFields, index: number) => (
						<ProjectCard key={index} project={p} />
					))}
			</div>
		</section>
	)
}

export function getStaticProps() {
	return {
		props: {
			test: process.env.TEST,
		},
	}
}

export default Projects
