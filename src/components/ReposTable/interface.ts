export interface ReposDataProps {
  option: boolean;
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