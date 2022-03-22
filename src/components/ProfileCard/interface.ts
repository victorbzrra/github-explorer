export interface UserDataProps {
  user: {
    name: string;
    bio: string;
    login: string;
    html_url: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
  };
}