import * as Contentful from "contentful"

export interface TypeClientProjectsFields {
	image?: Contentful.Asset
	title?: Contentful.EntryFields.Symbol
	description?: Contentful.EntryFields.Text
	websiteLink?: Contentful.EntryFields.Symbol
	githubLink?: Contentful.EntryFields.Symbol
}

export type TypeClientProjects = Contentful.Entry<TypeClientProjectsFields>
