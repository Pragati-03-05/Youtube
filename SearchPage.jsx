import './Searchpage.css';
import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import Loading from "./Loading";
import SearchApi from './SearchApi';
import { useParams } from "react-router-dom";
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const { searchQuery } = useParams();

  const getAllVideos = async () => {
    SearchApi(searchQuery, 'search').then(res => {
      const ApiDet = res && res.items.map(doc => ({
        ...doc,
        VideoLink: 'https://www.youtube.com/embed/' + doc.id.videoId
      }))
      setResults(prev => [...prev, ...ApiDet])
      setLoading(false)
    })
  };

  useEffect(() => {
    getAllVideos()
  }, [searchQuery])

  const handelInfiniteScroll = async () => {
    try {
      if (
        (window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight)
      ) {
        getAllVideos()
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div className="searchPage">
      <div className='pageHeading'>
        <TuneIcon />
        <div>Filter</div>
      </div>
      <hr />
      <div>
        {loading ? <Loading/>: <><h2>Recommended</h2>
          <div className='search'>
            {results.map(item => <SearchResult src={item.snippet.thumbnails} title={item.snippet.title} channelTitle={item.snippet.channelTitle}/>)}
          </div></>}
      </div>
    </div>
  );
}

export default SearchPage;
