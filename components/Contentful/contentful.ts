import contentful from "contentful"

const contentfulClient = contentful.createClient({
	space: String(process.env.CONTENTFUL_SPACE_ID),
	accessToken: String(process.env.CONTENTFUL_ACCESS_TOKEN),
})

export default contentfulClient
