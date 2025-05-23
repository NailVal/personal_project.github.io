import { useEffect, useState } from 'react'
import '../styles/mainpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Outlet } from 'react-router'

function MainPage() {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (isExpanded) {
      console.log('Expand')
    }
  }, [isExpanded])

  return (
    <>
    <div className={`project_ctn ${isExpanded ? 'left': ''}`}>
      <header>
        <div className="header_ctn">
          <div className="heading_ctn">
            <div className="heading_content"> 
              <h1>Nail Valeev</h1>
              <p>Entry level Web developer</p>
            </div>
          </div>
          <div className="icons_ctn">
            <div className="icons_list">
              <a href='https://www.youtube.com/@NailVal-b7t'><FontAwesomeIcon icon={faYoutube}  size="2x" /></a>
              <a><FontAwesomeIcon icon={faGithub}  size="2x" /></a>
              <a><FontAwesomeIcon icon={faTwitter}  size="2x" /></a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main_content"> 
          <div className="main_heading">
            <h2 style={{ marginTop: '15px' }}>See content</h2>
          </div>
          <div className="main_card_list">
            <div className="li_ctn">
              <img src={'/images/blog.jpg'} width={'100%'} height={'100%'} />
              <div className="li"><NavLink to="/blog"><span>See Blog</span></NavLink></div>
            </div>
            <div className="li_ctn">
              <img src={'/images/video.jpg'} width={'100%'} height={'100%'} />
              <div className="li"><NavLink to="/videos"><span>See Videos</span></NavLink></div>
            </div>
            <div className="li_ctn">
              <img src={'/images/info.jpg'} width={'100%'} height={'100%'} />
              <div className="li"><NavLink to="/info"><span>See Info</span></NavLink></div>
            </div>
          </div>
          <div className="main_paras">
            <div className="main_paras_content">
              <div>
                <h2 style={{ marginBottom: '30px' }}>Tell me more</h2>
                <p>Custer graduated from the United States Military Academy at West Point, New York, last in his graduating class of 1861, although he finished 34th out of a starting class of 108 candidates.[3] Nonetheless, Custer achieved a higher military rank than any other U.S. Army officer in his class.[4] Following graduation, he worked closely with future Union Army Generals George B. McClellan and Alfred Pleasonton, both of whom recognized his abilities as a cavalry leader. He was promoted in the early American Civil War (1861–1865), to brevet brigadier general of volunteers when only aged 23. Only a few days afterwards, he fought at the pivotal Battle of Gettysburg in Pennsylvania in early July 1863, where he commanded the Michigan Brigade. Despite being outnumbered, the new General Custer defeated Confederate States Army cavalry of General J. E. B. Stuart's attack at East Cavalry Field on the crucial third day of the Gettysburg clash.</p>
              </div>
              <div>
                <h2 style={{ marginBottom: '15px' }}>Benefits</h2>
                <ul>
                  <li>Benefit #1</li>
                  <li>Benefit #2</li>
                  <li>Benefit #3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside className={isExpanded ? 'display' : ''}>
          <div className="main_widget_ctn">
            <div className="main_widget_list">
              <div>Home</div>
              <div>About me</div>
              <div>Contact me</div>
            </div>
          </div> 
      </aside>
      <div className="three_lines" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="three_lines_icon">&#x2630;</div>
      </div>
      <footer>
        <div className="footer_ctn">
          <p><span>&copy;</span>Nail Valeev 2025</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default MainPage
