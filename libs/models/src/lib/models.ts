export class PagedResponse {
  contents: [];
  length: number;
  pageIndex: number;
  pageSize: number;
  pages: number;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.contents = data.contents;
    this.length = data.length;
    this.pageIndex = data.pageIndex;
    this.pageSize = data.pageSize;
    this.pages = data.pages;
  }
}
