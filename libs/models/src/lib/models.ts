export class PagedResponse<T> {
  pageIndex: number;
  pageSize: number;
  results: T[];
  totalCount: number;
  totalPages: number;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.pageIndex = data.pageIndex;
    this.pageSize = data.pageSize;
    this.results = data.results;
    this.totalCount = data.totalCount;
    this.totalPages = data.totalPages;
  }
}
