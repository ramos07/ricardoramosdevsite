import * as Contentful from "contentful"

export interface TypeSiteDocsFields {
	documentTitle?: Contentful.EntryFields.Symbol
	documentFile?: Contentful.Asset
}

export type TypeSiteDocs = Contentful.Entry<TypeSiteDocsFields>
