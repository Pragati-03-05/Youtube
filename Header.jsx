import React,{useState} from 'react';
import './Header.css';
import utube_icon from './utube_icon.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const Header = () => {
    const [inputSearch,setInputSearch]=useState('')
    return (
        <div className='header_container'>
           
            <div className='header_left'>
                <MenuIcon className='header_left_icon'/>
                <Link to='/'><img src={utube_icon} alt='im' /></Link>
            </div>
            <div className='header_middle'>
                <input type='text' placeholder='Search' id='myInput' className='input' value={inputSearch} onChange={(e)=>{console.log("TTTTTTTTTTTT")
                setInputSearch(e.target.value)}}/>
                <Link to={`/search/${inputSearch}`}><span className='searchBtn'><SearchIcon/></span></Link>
            </div>
            <div className='header_right'>
                <VideoCallIcon className='header_right_icon'/>
                <AppsIcon className='header_right_icon'/>
                <NotificationsIcon className='header_right_icon'/>
            </div>
        </div>
    )
}
export default Header;