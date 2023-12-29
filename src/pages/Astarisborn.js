// import React from 'react';
// import { Box } from '@mui/material';
// export default function Astarisborn() {
//     return (
//       <div className="astarisborn-container">
//          <Box
//           component="img"
//           sx={{
//             minHeightheight:"400px",
//             width:"40%",
//             marginLeft:5,
//             marginRight:40,
//             padding:0, 
//           }}
//           alt="Movies"
//           src="https://images.hungama.com/c/1/07c/c1d/46581570/46581570_1280x800.jpg"
//           />
//           <p>
//             <h1 color='blue '>About:</h1>
//             <br/>
//             <h3>
//             After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.
        
//             </h3>
//             <br/>
//             <h2>
//                 Director:
// Bradley Cooper
//             </h2>
//             <br/>
//             <h2>
//                 writers:sam eliot

//             </h2>
//             <br/>
//             <h2>
//             Release date: 12 October 2018 (India)
//             </h2>
//           </p>
//       </div>
      
//     );
//   }
 
import React from "react";
import { MoviesList1 } from "../data/Starisborndata";
import Layout from "../components/Layout/Layout";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';


import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const getLabelText = (value) => {

  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
};


const Movies = () => {
  const [comment, setComment] = React.useState('');
  return (
    
    <Layout>
     <div style={{backgroundImage:"../images/img1.jpg"}}> 
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:" center"}}>
        {MoviesList1.map((Movies) => (
          <Card sx={{ maxWidth: "400px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia sx={{ minHeight: "400px" }} component="img" src={Movies.image} alt={Movies.name} />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">{Movies.name}</Typography>
               
                <Typography variant="body2">{Movies.description} </Typography>
                
                <br />
                <h2>Director: Bradley Cooper</h2> <br />
                <h2>Writers: sam eliot</h2><br />
                <h2>Release date:12 October 2018 (India)</h2> <br />
                <br/>
                <Rating name="hover-feedback" value={Movies.rating} precision={0.5} getLabelText={getLabelText} onChange={(event, newValue) => { }} /><br/>
                <TextField id="outlined-multiline-static" label="Add a comment" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)}
                 /> <SendIcon/>
               
              </CardContent>
            </CardActionArea>
          </Card>))}
                </Box> 
                </div>
                     </Layout>
                    
           ); }; 


export default Movies;
