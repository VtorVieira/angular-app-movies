export interface IReviewsMovie {
  id: number;
  backdrop_path: string;
  title: string;
  author: string;
  created_at: string;
  author_details: {
    rating: number;
  };
  content: string;
}