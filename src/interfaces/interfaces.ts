export interface UserProps {
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
  publicRepos: [
    {
      name: string;
      html_url: string;
      created_at: string;
      stargazers_count: number;
    }
  ];
  starredRepos: [
    {
      name: string;
      html_url: string;
      created_at: string;
      stargazers_count: number;
    }
  ]
}