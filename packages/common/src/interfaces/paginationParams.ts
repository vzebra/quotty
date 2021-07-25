export enum PageSize {
  SMALL = 10,
  MEDIUM = 50,
  LARGE = 100
}

export enum PaginationParam {
  PAGE_SIZE = 'pageSize',
  OFFSET = 'offset'
}

export interface PaginationParams {
  [PaginationParam.PAGE_SIZE]?: PageSize
  [PaginationParam.OFFSET]?: number
}
