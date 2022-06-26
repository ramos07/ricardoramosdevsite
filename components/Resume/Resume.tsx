import contentfulClient from "../Contentful/contentful"
import { useState, useEffect } from "react"
import { TypeSiteDocsFields } from "../../types"

const Resume = () => {
	const [resume, setResume] = useState<TypeSiteDocsFields | null>(null)
	useEffect(() => {
		async function getItems() {
			await contentfulClient
				.getEntries<TypeSiteDocsFields>({
					content_type: "siteDocs",
					limit: 1,
				})
				.then((res) => {
					if (res !== undefined) {
						setResume(res.items[0].fields)
					}
				})
		}
		getItems()
	}, [])
	return (
		<section id="resume" className="resume-section">
			<h2>Resume</h2>
			<p>
				View/download my resume for a more in depth view on my professional work
				experience.
			</p>
			{resume && (
				<a
					href={resume.documentFile?.fields.file.url}
					target="_blank"
					rel="noreferrer noopener"
					className="resume-btn"
				>
					View Resume
				</a>
			)}
		</section>
	)
}

export default Resume
