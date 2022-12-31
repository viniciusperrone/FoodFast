import { createContext, useState, ReactNode, useContext } from 'react';
import { ICategory, IUser, IRecipeDetails } from '@shared/interfaces';
import { USER_DEFAULT } from '@utils/defaultValues';

export interface IContextAppData {
  privateRoute: boolean;
  setPrivateRoute: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  category: ICategory;
  setCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  recipeDetails: IRecipeDetails;
  setRecipeDetails: React.Dispatch<React.SetStateAction<IRecipeDetails>>;
}

type ContextAppProps = {
  children: ReactNode;
};

const ContextApp = createContext({} as IContextAppData);

export function AppProvider({ children }: ContextAppProps) {
  const [privateRoute, setPrivateRoute] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>(USER_DEFAULT);
  const [category, setCategory] = useState<ICategory>({} as ICategory);
  const [recipeDetails, setRecipeDetails] = useState<IRecipeDetails>(
    {} as IRecipeDetails,
  );

  return (
    <ContextApp.Provider
      value={{
        privateRoute,
        setPrivateRoute,
        user,
        setUser,
        category,
        setCategory,
        recipeDetails,
        setRecipeDetails,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useContextApp(): IContextAppData {
  const context = useContext(ContextApp);

  if (!context)
    throw new Error('useContextApp must be used within an AppProviderProvider');

  return context;
}
