export class BaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: any) {
    if (!data) return;

    this.id = data.id;

    if (data.createdAt) this.createdAt = new Date(data.createdAt);
    if (data.updatedAt) this.updatedAt = new Date(data.updatedAt);
  }
}
