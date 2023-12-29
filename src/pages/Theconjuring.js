import React from 'react';
import { Box } from '@mui/material';
export default function Theconjuring() {
    return (
      <div className="astarisborn-container">
         <Box
          component="img"
          sx={{
            minHeightheight:"400px",
            width:"40%",
            marginLeft:5,
            marginRight:40,
            padding:0, 
          }}
          alt="Movies"
          src="http://t0.gstatic.com/images?q=tbn:ANd9GcRa92HSdw84v2Zc1XG-MGVNYMavVNZls5FtUKTdNOpt7wG8ltv3EnATDVIAOAOJjvOzPGCyLQ"
          />
          <p>
            <h1 color='blue '>About:</h1>
            <br/>
            <h3>
            That depends on whether you believe in ghosts. But the movie is based on the Perron family, who moved into the house in 1971, and said they began experiencing paranormal phenomena
            </h3>
            <br/>
            <h2>
                Director:
                Michael Chaves, James Wan
            </h2>
            <br/>
            <h2>
                writers:sam eliot

            </h2>
            <br/>
            <h2>
            Release date: 12 October 2018 (India)
            </h2>
          </p>
      </div>
      
    );
  }