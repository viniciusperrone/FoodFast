export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  avatar: any;
  token: string;
};

export interface ICategory {
  id: number;
  name: string;
};

export interface IRecipeDetails {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  description: string;
  ingredients: String[];
  steps: String[];
  id_category: number;
};