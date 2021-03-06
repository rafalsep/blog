import { Map } from 'immutable';
import { selectArticle } from '../article-selector';

describe('article-selector', () => {
  test('should select article', () => {
    const article = selectArticle()(
      Map({
        route: Map({ location: { pathname: '/test-article?from=10' } }),
        blog: Map({ articles: [{ slug: { current: 'test-article' }, content: 'test-article-content' }] })
      })
    );

    expect(article).toEqual({ slug: { current: 'test-article' }, content: 'test-article-content' });
  });
});
