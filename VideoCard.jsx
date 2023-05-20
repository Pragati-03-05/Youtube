import './VideoCard.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function VideoCard({src,title,channelTitle,item}) {
    return (
        <Link to={"/watch?v=" + item.id} key={item.id}>
        <div className="videoCard">
            <img src={src['medium'].url} alt='im'/>
            <div className='videoCard_info'>
                <AccountCircleIcon className='videoCard_avatar' />
                <div className='video_text'>
                    <h4>{title}</h4>
                    <p>{channelTitle}</p>
                    <p>32k views . 4 weeks ago</p>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default VideoCard;
