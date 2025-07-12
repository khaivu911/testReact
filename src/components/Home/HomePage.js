import videoHomepage from '../../assets/video-homepage.mp4'
const HomePage = (props) => {
    return(
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4"
               />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>
                    There's a better way to practice Scrum
                </div>
                <div className='title-2'>
                    You want to have more knowledge in Scrum and you don't have any source to learn.
                    Go ahead here and you will gain more and more 
                </div>
                <div className='title-3'>
                    <button>Get's started. It's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;