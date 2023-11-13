export interface Post {
  limit: number;
  posts: {
    body: string;
    id: number;
    reactions: number;
    title: string;
    userId: number;
  };
  skip: number;
  total: number;
}
