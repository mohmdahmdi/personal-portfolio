import { Language } from "@mui/icons-material";
import CollapseComp from '../components/aboutMeSidebar/collapseComp';

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

interface ICreditionals {
  username: string;
  password: string;
  accessType: string;
}

interface IAdmin {
  id: number;
  username: string;
  accessType: string;
}

interface IInformationApi {
  about_me: string;
}

interface IContactData {
  whats_app?: string;
  gmail?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  telegram?: string;
}

interface skillStore {
  data : {data : {skill : string, caption : string}[]} | null,
  loading : boolean,
  error : any,
  fetchData : any
}

export type {
  IRepos,
  options,
  IProps,
  ICreditionals,
  IAdmin,
  IInformationApi,
  IContactData,
  skillStore
};
