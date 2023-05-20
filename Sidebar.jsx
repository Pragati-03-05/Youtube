import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className="sidebar">
     <SidebarRow Icon={HomeIcon} title='Home' selected={true}/>
     <SidebarRow Icon={WhatshotIcon} title='Shorts'/>
     <SidebarRow Icon={SubscriptionsIcon} title='Subscriptions'/>
<hr/>
<SidebarRow Icon={VideoLibraryIcon} title='Library'/>
<SidebarRow Icon={HistoryIcon} title='History'/>
<SidebarRow Icon={OndemandVideoIcon} title='Your videos'/>
<SidebarRow Icon={WatchLaterIcon} title='Watch Later'/>
<SidebarRow Icon={ThumbUpOffAltIcon} title='Liked videos'/> 
<SidebarRow Icon={KeyboardArrowDownIcon} title='Show More'/>
<hr/>
    </div>
  );
}

export default Sidebar;
