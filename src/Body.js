import React from 'react'

const Body = () => {
  return (
    <div className="flux-container">
            <div className="row">
              <div className="col-lg-12 pt-1">
                <div className="project">
                  <div className="row mb-12">
                    <div className="col-md-3 ">
                        <div className="left-sidebar">
                            <div className="imp-links">
                                <a href="#"><img src={require('./image/news.png')}/>Latest News</a>
                                <a href="#"><img src={require('./image/friends.png')}/>Friends</a>
                                <a href="#"><img src={require('./image/group.png')}/>Group</a>
                                <a href="#"><img src={require('./image/news.png')}/>Marketplace</a>
                                <a href="#"><img src={require('./image/watch.png')}/>Watch</a>
                                <a href="">See More</a>
                            </div>
                            <div className="shortcut-links">
                                <p>Your Shortcuts</p>
                                <a href="#"><img src={require('./image/shortcut-1.png')}/>Web Developers</a>
                                <a href="#"><img src={require('./image/shortcut-2.png')}/>Web design Course</a>
                                <a href="#"><img src={require('./image/shortcut-3.png')}/>Full stack developer</a>
                                <a href="#"><img src={require('./image/shortcut-4.png')}/>Website Expert</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 list__channel">
                        <div className="main-content">
                            <div className="story-gallery">
                                <div className="story story1">
                                    <img src={require('./image/upload.png')}/>
                                    <p>Post Story</p>
                                </div>
                                <div className="story story2">
                                    <img src={require('./image/member-1.png')}/>
                                    <p>Alison</p>
                                </div>
                                <div className="story story3">
                                    <img src={require('./image/member-2.png')}/>
                                    <p>Jackson</p>
                                </div>
                                <div className="story story4">
                                    <img src={require('./image/member-3.png')}/>
                                    <p>Samona</p>
                                </div>
                                <div className="story story5">
                                    <img src={require('./image/member-4.png')}/>
                                    <p>John Deo</p>
                                </div>
                            </div>
                
                            <div className="write-post-container">
                                <div className="user-profile">
                                    <img src={require('./image/ppsizer.jpg')}/>
                                    <p>Nisha Pandey</p>
                                </div>
                                
                                <div className="post-input-container">
                                    <textarea rows="3" placeholder="What's on Your mind,Nisha? "></textarea>
                                    <div className="add-post-links">
                                        <a href="#"><img src={require('./image/live-video.png')}/>Live Video</a>
                                        <a href="#"><img src={require('./image/photo.png')}/>Photo/Video</a>
                                        <a href="#"><img src={require('./image/feeling.png')}/>Feeling/Activity</a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src={require('./image/ppsizer.jpg')}/>
                                        <div>
                                            <p>Nisha Pandey</p>
                                            <span>June 24 2021, 13:40pm</span>
                                        </div>
                                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                                    </div>
                                </div>
                                <p className="post-text">नेपाली ५० रुपैयाँको सिक्का अनि कुमारी छें (कुमारी घर)। वि.स. २०६४ सालमा कुमारी जात्रा २५० औं वर्षमा प्रवेश गरेको शुभ अवसरमा ५० र ५०० रुपैयाँको सिक्का छपाई गरिएको थियो। ❤️ </p>
                                <img src={require('./image/nepal_n.jpg')} className="post-img"/>
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div><img src={require('./image/like-blue.png')}/>120</div> 
                                        <div><img src={require('./image/comments.png')}/>45</div>
                                        <div><img src={require('./image/share.png')}/>5</div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src={require('./image/ppsizer.jpg')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src={require('./image/ppsizer.jpg')}/>
                                        <div>
                                            <p>Nisha Pandey</p>
                                            <span>June 24 2021, 13:40pm</span>
                                        </div>
                                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                                    </div>
                                </div>
                                <p className="post-text">नेपाल सेनाको सैन्य पदमा भर्ना खुल्यो: Nepal Army has announced vacancy for 4000 applicants for military. The application can be filled from Bhadra 24 to Ashoj 23. 
                                    File Pic. Krishna Neupane/RSS</p>

                                <img src={require('./image/army_n.jpg')} className="post-img"/>
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div><img src={require('./image/like-blue.png')}/>120</div> 
                                        <div><img src={require('./image/comments.png')}/>45</div>
                                        <div><img src={require('./image/share.png')}/>5</div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src={require('./image/ppsizer.jpg')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src={require('./image/ppsizer.jpg')}/>
                                        <div>
                                            <p>Nisha Pandey</p>
                                            <span>June 24 2021, 13:40pm</span>
                                        </div>
                                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                                    </div>
                                </div>
                                <p className="post-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores nulla iste? Sed pariatur sapiente nulla eligendi repellat vero reprehenderit quis iusto accusantium? Consequuntur, aperiam quo! Porro, itaque.<a href="#">#This is Nisha</a></p>
                                <img src={require('./image/feed-image-3.png')} className="post-img"/>
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div><img src={require('./image/like-blue.png')}/>120</div> 
                                        <div><img src={require('./image/comments.png')}/>45</div>
                                        <div><img src={require('./image/share.png')}/>5</div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src={require('./image/ppsizer.jpg')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src={require('./image/ppsizer.jpg')}/>
                                        <div>
                                            <p>Nisha Pandey</p>
                                            <span>June 24 2021, 13:40pm</span>
                                        </div>
                                        <a href="#"><i className="fas fa-ellipsis-v"></i></a>
                                    </div>
                                </div>
                                <p className="post-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores nulla iste? Sed pariatur sapiente nulla eligendi repellat vero reprehenderit quis iusto accusantium? Consequuntur, aperiam quo! Porro, itaque.<a href="#">#This is Nisha</a></p>
                                <img src={require('./image/feed-image-5.png')} className="post-img"/>
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div><img src={require('./image/like-blue.png')}/>120</div> 
                                        <div><img src={require('./image/comments.png')}/>45</div>
                                        <div><img src={require('./image/share.png')}/>5</div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src={require('./image/ppsizer.jpg')}/>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="load-more-btn">Load More</button>
                        </div>
                    </div>
                    <div className="col-md-3 list__channel">
                        <div className="right-sidebar">
                            <div className="sidebar-title">
                                <h4>Events</h4>
                                <a href="#">See All</a>
                            </div>
                
                            <div className="event">
                                <div className="left-event">
                                    <h3>18</h3>
                                    <span>March</span>
                                </div>
                                <div className="right-event">
                                    <h4>Social Media </h4>
                                    <p><i className="fas fa-map-marker-alt"></i>Itahari,Nepal</p>
                                    <a href="#">More Info</a>
                                </div>
                            </div>
                            <div className="event">
                                <div className="left-event">
                                    <h3>22</h3>
                                    <span>june</span>
                                </div>
                                <div className="right-event">
                                    <h4>Mobile Marketing </h4>
                                    <p><i className="fas fa-map-marker-alt"></i>Biratchok</p>
                                    <a href="#">More Info</a>
                                </div>
                            </div>
                            <div className="sidebar-title">
                                <h4>Advertisement</h4>
                                <a href="#">Close</a>
                            </div>
                            <img src={require('./image/advertisement.png')} className="sidebar-ads"/>
                                <div className="sidebar-title">
                                <h4>Conversation</h4>
                                <a href="#">Hide Chat</a>
                            </div>
                
                            <div className="online-list">
                                <div className="online">
                                    <img src={require('./image/member-1.png')}/>
                                </div>
                                <p>Alison Mina</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src={require('./image/member-2.png')}/>
                                </div>
                                <p>Jackson Aston</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src={require('./image/member-3.png')}/>
                                </div>
                                <p>Samona Rose</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src={require('./image/member-1.png')}/>
                                </div>
                                <p>Alison Mina</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src={require('./image/member-2.png')}/>
                                </div>
                                <p>Jackson Aston</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src={require('./image/member-3.png')}/>
                                </div>
                                <p>Samona Rose</p>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Body