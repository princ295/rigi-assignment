import { Box, Button, Container, DialogContent, Typography } from "@mui/joy"
import { Link } from "react-router-dom"
import TocIcon from '@mui/icons-material/Toc';
import { ModalBlock } from "./ModalBlock";
import { useState } from "react";

interface HeaderProps {
  item: any[],
  setNewData: (data:any)=> void
}

export const Header = ({ item, setNewData }: HeaderProps) => {

  const [tableData, setTableData] = useState([...item]);
  const [reOrder, setReOrder] = useState(false)

  const handleDragStart = (e: any, index: any) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any, dropIndex: any) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const newData = [...tableData];
    const draggedItem = newData[dragIndex];
    newData.splice(dragIndex, 1);
    newData.splice(dropIndex, 0, draggedItem);
    setTableData(newData);
    setNewData(newData)
  };


  return (
    <>
      <Box height="63px" >
        <Container sx={{ padding: '10px 0' }}>
          <Box display='flex' justifyContent='space-between'>
            <Link to="/">
              <Typography sx={{ color: 'blueviolet', fontWeight: 700 }} level="h3" >R<small>igiTube</small></Typography>
            </Link>
            <Button
              size="sm"
              variant="outlined"
              color="neutral"
              startDecorator={<TocIcon />}
              onClick={() => setReOrder(true)}
            >
              Reorder
            </Button>

          </Box>
        </Container>
      </Box>
      <ModalBlock isVisible={reOrder} close={() => setReOrder(false)}>
        <DialogContent>
          <div style={{ minWidth: 500, padding: 10 }}>
            <table style={{width: "100%"}}>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                  style={{display: 'block'}}
                    key={row.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    <Box display="flex" sx={{border: 1, width: "100%"}}>
                    <td>{index}</td> &nbsp;
                    <td>{row.subtitle}</td>
                    </Box>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DialogContent>
      </ModalBlock>
    </>
  )
}