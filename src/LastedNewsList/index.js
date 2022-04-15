import { useState } from 'react';
import './LastedNewsList.css';
import ArticleItem from '../ArticleItem';
import MainTitle from '../MainTitle';
function LastedNewsList() {
  const [mainTitle,setMainTitle] = useState('Lasted Articles');
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle title={mainTitle} />
        {/* End Main Title */}
        {/* Latest News List */}
        <div className="latest-news__list spacing">
          {/* Latest news card */}
          <div className="latest-news__card">
            <ArticleItem />
          </div>
          {/* End Latest news card */}
          {/* Latest news card */}
          <div className="latest-news__card">
            <ArticleItem />
          </div>
          {/* End Latest news card */}
          {/* Latest news card */}
          <div className="latest-news__card">
            <ArticleItem />
          </div>
          {/* End Latest news card */}
        </div>
        {/* End Latest News List */}
      </div>
    </div>
  );
}

export default LastedNewsList;