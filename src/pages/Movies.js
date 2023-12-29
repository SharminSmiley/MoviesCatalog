import React from "react";
import { MoviesList } from "../data/data";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


const Movies = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MoviesList.map((Movies) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={Movies.image}
                alt={Movies.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {Movies.name}
                </Typography>
                <Typography variant="body2">{Movies.description}


                </Typography>
              </CardContent>
            </CardActionArea>


          </Card>
        ))}
      </Box>
     
    </Layout>
  );
};

export default Movies;
