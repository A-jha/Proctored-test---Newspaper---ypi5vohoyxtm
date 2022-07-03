import React, { useEffect, useState } from "react";

const News = () => {
  const [userQuery, setUserQuery] = useState("example");
  const [country, setCountry] = useState("India");
  const [articles, setArticles] = useState([]);
  const [minLan, setMinLan] = useState("Hin");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userQuery, country);
    try {
      const lang = languages.map((language) => {
        if (language.name.toUpperCase() === country.toUpperCase()) {
          return language._n;
        }
      });
      if (lang) {
        setMinLan(lang);
      }
    } catch {
      setMinLan("Hin");
    }
    fetchNews();
    setUserQuery("");
    setCountry("");
  };
  let url = `https://gnews.io/api/v4/search?q=${userQuery}&token=b71e47efe2458a4900463f1993be24b9&lang=${country}`;
  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${userQuery}&token=b71e47efe2458a4900463f1993be24b9&lang=${minLan}`
      );
      const news = await response.json();
      //   console.log(news);
      const { articles } = news;
      console.log(articles);
      setArticles(articles);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchNews();
    console.log(articles);
  }, []);
  return (
    <div>
      <form className="searchCont" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
        {/* <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {languages.map((language) => {
            return (
              <option key={language._n} value={language._n}>
                {language.name}
              </option>
            );
          })}
        </select> */}
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="newsCont">
        {articles.map((article) => {
          return (
            <div key={article.url}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const languages = [
  {
    name: "Arabic",
    _n: "ar",
  },
  {
    name: "German",
    _n: "de",
  },
  {
    name: "Greek",
    _n: "el",
  },
  {
    name: "English",
    _n: "en",
  },
  {
    name: "Spanish",
    _n: "es",
  },
  {
    name: "French",
    _n: "fr",
  },
  {
    name: "Hebrew",
    _n: "he",
  },
  {
    name: "Hindi",
    _n: "hi",
  },
  {
    name: "Italian",
    _n: "it",
  },
  {
    name: "Japanese",
    _n: "ja",
  },
  {
    name: "Malayalam",
    _n: "ml",
  },
  {
    name: "Marathi",
    _n: "mr",
  },
  {
    name: "Dutch",
    _n: "nl",
  },
  {
    name: "Norwegian",
    _n: "no",
  },
  {
    name: "Portuguese",
    _n: "pt",
  },
  {
    name: "Romanian",
    _n: "ro",
  },
  {
    name: "Russian",
    _n: "ru",
  },
  {
    name: "Swedish",
    _n: "sv",
  },
  {
    name: "Tamil",
    _n: "ta",
  },
  {
    name: "Ukrainian",
    _n: "uk",
  },
  {
    name: "Chinese",
    _n: "zh",
  },
];

export default News;
