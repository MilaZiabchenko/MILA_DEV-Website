import { useParams, Link } from 'react-router-dom';
import articlesData from '../../data/articles-data';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import Error from '../Error';

const Article = () => {
  const { articleName } = useParams();

  const articleData = articlesData.find(
    article => article.name === articleName
  );

  if (!articleData) return <Error />;

  const { title, updated, content } = articleData;

  return (
    <div className='container'>
      <p className='text-center'>
        <Link to='/articles'>← Back to Articles</Link>
      </p>
      <ArticleHeader title={title} updated={updated} />
      <ArticleContent content={content} />
    </div>
  );
};

export default Article;
