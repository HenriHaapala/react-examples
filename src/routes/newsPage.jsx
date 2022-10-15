import News from '../components/news/news';
import '../css/cover.css';

export default function NewsPage() {

    return (
      <main className="inner cover">
        <h2 className="cover-heading">News</h2>
        <News/>
      </main>
    );
  }