import Video from './items/Video';
import Article from './items/Article';
import withHighlight from '../../hocs/withHighlight';

const VideoHighlight = withHighlight(Video);
const ArticleHighlight = withHighlight(Article);

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoHighlight key={item.id} {...item} />
        );
      case 'article':
        return (
          <ArticleHighlight key={item.id} {...item} />
        );
      default:
        return null;
    }
  });
}
