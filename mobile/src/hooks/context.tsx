import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Context = createContext({});

type UserData = {
  id: number;
  email: string;
  username: string;
  password: string;
  avatar: any;
  token: string;
};

type CategoryData = {
  id: number;
  name: string;
};

type RecipeDetailsData = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  description: string;
  ingredients: String[];
  steps: String[];
  id_category: number;
};

export default function ContextProvider({ children }: Props) {
  const [user, setUser] = useState<UserData>({
    id: 0,
    username: '',
    email: '',
    password: '',
    avatar: null,
    token: '',
  });
  const [openDashboard, setOpenDashboard] = useState(false);
  const [category, setCategory] = useState<CategoryData>({} as CategoryData);
  const [recipeDetails, setRecipeDetails] = useState({} as RecipeDetailsData);

  return (
    <Context.Provider
      value={{
        openDashboard,
        setOpenDashboard,
        user,
        setUser,
        category,
        setCategory,
        recipeDetails,
        setRecipeDetails,
      }}
    >
      {children}
    </Context.Provider>
  );
}
