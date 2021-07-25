export enum QueryParam {
  TAGS_CONTAINS = 'tags_contains',
  AUTHOR_EQ = 'author_eq',
  AUTHOR_SUBSTRING = 'author_substring',
  TEXT_SUBSTRING = 'text_substring'
}

export interface RandomQuoteParams {
  [QueryParam.TAGS_CONTAINS]?: string[] | string
  [QueryParam.AUTHOR_EQ]?: string
  [QueryParam.AUTHOR_SUBSTRING]?: string
  [QueryParam.TEXT_SUBSTRING]?: string
}
