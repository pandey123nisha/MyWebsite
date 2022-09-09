import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="nav-left">
            <img src={require('./image/logo.png')} Name="logo"/> 
            <div className="search-box">
                <img src={require('./image/search (1).png')}/>
                <input type="text" placeholder="search"/>
            </div>
            <ul>
                <li><img src={require('./image/notification.png')}/></li>
                <li><img src={require('./image/inbox.png')}/></li>
                <li><img src={require('./image/video.png')}/></li>
                <li><img src={require('./image/inbox.png')}/></li>
            </ul>
        </div>
        <div className="nav-right">
            <div className="nav-user-icon online" onclick="settingsMenuToggle()">
                <img src={require('./image/ppsizer.jpg')}/>
            </div>
            <div className="icon">
                <img src={require('./image/menu.png')}width="35px"/>
                <img src={require('./image/messanger.jfif')}width="50px"/>
                <img src={require('./image/notification.png')}width="30p"/>
            </div>
            <div className="setting-menu">
                <div id="dark-btn">
                    <span></span>
                </div>
                <div className="setting-menu-inner">
                    <div className="user-profile">
                        <img src={require('./image/profile-pic.png')}/>
                        <div>
                            <p>John Nicholson</p>
                            <a href="#"> See your Profile</a>
                        </div>
                    </div>
                    <hr/>
                    <div className="user-profile">
                        <img src={require('./image/feedback.png')}/>
                        <div>
                            <p>Give Feedback</p>
                            <a href="#">Help Us to Improve The New design </a>
                        </div>
                    </div>
                    <hr/>
                    <div className="setting-links">
                        <img src={require('./image/setting.png')} className="settings-icon"/>
                        <a href="#">Setting & Privacy <img src= {require('./image/arrow.png')}width="10px"/></a>
                    </div>
                    <div className="setting-links">
                        <img src={require('./image/help.png')} className="settings-icon"/>
                        <a href="#">Help & Support <img src={require('./image/arrow.png')} width="10px"/></a>
                    </div>
                    <div className="setting-links">
                        <img src={require('./image/display.png')} className="settings-icon"/>
                        <a href="#">Dispaly & Accesibility<img src={require('./image/arrow.png')} width="10px"/></a>
                    </div>
                    <div className="setting-links">
                        <img src={require('./image/logout.png')} className="settings-icon"/>
                        <a href="#">Logout<img src={require('./image/arrow.png')} width="10px"/></a>
                    </div>
                </div>
            </div>         
        </div>
    </nav>
  )
}

export default Navbar