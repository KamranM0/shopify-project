export type Product = {
  product_id: string;
  created_at: string;
  name: string;
  price: string;
  short_description: string;
  feat_1: string | null;
  feat_2: string | null;
  feat_3: string | null;
  image: string;
  long_description: string;
  category_id: string;
  soldAmount: string;
  categories: { name: string };
};
export type ProductFormTypes = {
  formData: FormData;
  formInput?: Partial<Product>;
  id?: string;
};
