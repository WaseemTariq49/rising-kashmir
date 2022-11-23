import React from 'react';
import NewsFile from '../assets/homePhotosAPI.json';
import '../styles/home.scss'

const Home = () => {

  const getImage=()=>NewsFile.map(item=>item.thumbnailUrl)
  // const getTitle=()=>
  // const getNews=()=>
  

  return (
    <>
      <div className='homecontainer'>
        {/* /*---------LEFT SECTION OF HOME-----------*/ }
        <div className='fsthome'>
          <div>
            <img src={getImage()}></img>
            <h3>{NewsFile[0].title}</h3>
            <p>{NewsFile[0].news}</p>
          </div>
          
          <div className='tagline'>
            <h4>DEVELOPING STORY</h4>
          </div>
          
          <div>
            <img src={getImage()}></img>
            <h3>{NewsFile[1].title}</h3>
          </div>
        </div>

        {/* /*-------------RIGHT SECTION OF HOME----------- */ }
        <div className='scndhome '>
          <div className='fst_scndhome'>
            <img src={getImage()}/>
            <div>
              <h4>{NewsFile[0].title}</h4>
              <p>{NewsFile[0].news}</p>  
            </div>
          </div>

          <div className='tagline'>
            <h4>BREAKING</h4>
          </div>

          <div className='cardscontainer'>
              {
                NewsFile.map(item=>{
                  return(
                    <>
                    <div className='cardflex'>
                      <div className='cards'>
                        <img className='cardimage' src={item.thumbnailUrl}></img>
                      </div>
                      <p className='cardtext cards'>{item.news}</p>
                    </div>
                    </>
                  )
                })
              }
          </div>
        </div>
      </div>
    
    
    
    
    </>
  )
}

export default Home