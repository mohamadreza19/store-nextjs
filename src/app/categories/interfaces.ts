export type Category = {
  parentId: string | null;
  _id: string;
  name: string;
  parent: null;
};

export type AllCategoriesResponse = Category[];
