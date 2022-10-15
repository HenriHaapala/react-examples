import React, { Component } from 'react'

class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            topNews: []
        };
    }

    componentDidMount() {
        //Rest usage example
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1bea22d4a0ac4a26b674683f48a3ffb0')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ topNews: data })
            })
            .catch(console.log("error"))
    }

    render(){
        console.log(this.state.topNews)
        let newsArticles = this.state.topNews.articles?.map((news) => {
            return(
            <div className="card">
                <div className="card-body">
                    <h3 className="card-subtitle mb-2 text-muted">{news.source.name}</h3>
                    <h4 className="card-title">{news.title}</h4>
                    <img className='card-img' src={news.urlToImage}></img>
                    <p className="card-text">{news.content}</p>
                    <p className="card-text">{news.author}</p>
                    <p className="card-text">{news.publishedAt}</p>
                    <a href={news.url} target="_blank">Read more</a>
                </div>
            </div>
         )
        });

        return (
            <div className="inner cover">
                <center><h1>Top news</h1></center>
                {newsArticles}
            </div>
        );
    }
};

export default News;