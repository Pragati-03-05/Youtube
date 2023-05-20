import './SearchResult.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SearchResult({src,title,channelTitle}) {
    return (
        <div className="search_result">
            <img src={src['medium'].url} />
            <div className='search_result_info'>
                    <h4 style={{margin:0}}>{title}</h4>
                    <p>32k views . 4 weeks ago</p>
                    <div><AccountCircleIcon className='search_result_avatar' />
                    <div>{channelTitle}</div></div>
                    
               
            </div>
        </div>
    );
}

export default SearchResult;
