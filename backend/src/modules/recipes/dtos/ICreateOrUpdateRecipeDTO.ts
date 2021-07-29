export default interface ICreateOrUpdateRecipeDTO {
  category_id: string;
  name: string;
  description: string;
  ingredients: string;
  steps: string;
  video_url: string;
}
