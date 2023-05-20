import React, { useEffect, useState } from 'react';
import './Recommended.css';
import Loading from "./Loading";
import SearchApi from './SearchApi';
import VideoCard from './VideoCard';

function Recommended() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const getAllVideos = async () => {
    SearchApi('mostPopular', 'videos').then(res => {
      const ApiDet = res && res.items.map(doc => ({
        ...doc,
        VideoLink: 'https://www.youtube.com/embed/' + doc.id
      }))
      setResults(prev => [...prev, ...ApiDet])
      setLoading(false)
    })
  };

  useEffect(() => {
    getAllVideos()
  }, [])

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
    <div className="recommended">
      <div className={!loading?'recommended_head1':''}>
        {loading ? <><Loading/></> : (<>
          <div className='nav_bar'>
            <div>papaa</div>
            <div>mummy</div>
            <div>bhai</div>
            <div>maa</div>
            <div>bijoy</div>
            <div>sunita</div>
            <div>balu</div>
            <div>suti</div>
            <div>papu</div>
            <div>kuni</div>
            <div>mali</div>
            <div>dand</div>
            <div>panch</div>
            <div>ki</div>
            <div>dhol</div>
            <div>gol</div>
            <div>papaa</div>
            <div>mummy</div>
            <div>bhai</div>
            <div>maa</div>
            <div>bijoy</div>
            <div>sunita</div>
            <div>balu</div>
            <div>suti</div>
            <div>papu</div>
            <div>kuni</div>
            <div>mali</div>
            <div>dand</div>
            <div>panch</div>
            <div>ki</div>
            <div>dhol</div>
            <div>gol</div>
            <button>{'>'}</button>
          </div>
          <div className='video'>
            {results.map((item, ind) => (
            <VideoCard key={ind} src={item.snippet.thumbnails} title={item.snippet.title} channelTitle={item.snippet.channelTitle} item={item}/>
            ))}
          </div></>)}
      </div>
    </div>
  )
}

export default Recommended;
