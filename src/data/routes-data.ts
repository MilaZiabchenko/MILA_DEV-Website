import articlesData from './articles-data';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { linksData } from './links-data';

type IsCapitalizedString = Capitalize<string>;
type Route = { path: `/${string}`; title: IsCapitalizedString };

const mainRoutesData = linksData.map(({ path, title }) => Object.freeze({
  path: `/${path}` as const,
  title: capitalizeFirstLetter(title) as IsCapitalizedString
}));

const articleRoutesData = articlesData.map(({ name, title }) => Object.freeze({
  path: `/articles/${name}` as const,
  title: capitalizeFirstLetter(title) as IsCapitalizedString
}));

const routesData = [
  ...mainRoutesData,
  ...articleRoutesData,
] as const satisfies Route[];

export type RouteData = (typeof routesData)[number];
export default routesData;
