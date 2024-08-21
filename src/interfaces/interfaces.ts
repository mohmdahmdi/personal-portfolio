interface IRepos {
  name: string;
  html_url?: string;
  description?: string;
  created_at: string;
  [key: string]: any;
}

type options = { [key: string]: string | number };

interface IProps {
  repo: IRepos;
}

export type { IRepos, options, IProps };
