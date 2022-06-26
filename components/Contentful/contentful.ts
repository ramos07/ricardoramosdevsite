import * as contentful from "contentful"

const SPACE_ID: string = String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
const ACCESS_TOKEN: string = String(
	process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
)

const contentfulClient = contentful.createClient({
	space: SPACE_ID,
	accessToken: ACCESS_TOKEN,
})

export default contentfulClient
