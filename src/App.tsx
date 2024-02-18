import Box from '@mui/joy/Box';
import { Card as CardComponent } from "../src/components/Card";
import { Header } from './components/Header';
import { Container } from '@mui/joy';

import { mediaJSON } from "./db";
import "./App.css";
import { useState } from 'react';
function App() {

  const [data, setData] = useState(mediaJSON.categories[0].videos)

  const setNewData = (data: any) => {
    setData(data)
  }

  console.log(data, 'data');


  return (
    <>
      <Header item={data} setNewData={setNewData} />
      <Container>
        <Box
          component="ul"
          sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
          {data.map(el => <>
            <CardComponent {...el} />
          </>
          )}
        </Box>
      </Container>
    </>
  )
}

export default App
