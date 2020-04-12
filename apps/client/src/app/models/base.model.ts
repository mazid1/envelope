export class BaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: any) {
    if (!data) return;

    this.id = data.id;

    if (data.createdDate) this.createdAt = new Date(data.createdDate);
    if (data.modifiedDate) this.updatedAt = new Date(data.modifiedDate);
  }
}
