import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Subscribe() {
    const [textHtml, setTextHtml] = useState('');
    var handleClick = () => {
        return fetch('/Subscribe.tx')
        .then((r) => r.text())
        .then(text  => {
            console.log(text);
            setTextHtml(text);
        })  
      } 

      useEffect(() => {
        const fetchTextFile = async () => {
          try {
            handleClick();
          } catch (error) {
            console.error('Error loading text file:', error);
          }
        };
    
        fetchTextFile();
      }, []); 

    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography variant="h4" gutterBottom align="center">
                Subscribe
            </Typography>
            <iframe width="640" height="600" 
            src="https://d1784039.sibforms.com/serve/MUIFABL-66nEVIFCBQdBd0G7lO4JE_Y94TXTxhMSGQx6JO9p0-enSJ1K9qnF5pG8LVEZpSNl18wZm47Y5kAgBCxnzi_EMh31h8Nu2RQB16LfHVVNXvKEfSp44Q2dnlEK1lFhXQaDm0mKD0lBH2hG4sTDgE6qZwHCHJYz82OT47uAqp0NB0HAHIS82w2pSkctkk6N8wb9u2E8d0Ul" 
            // frameborder="0" scrolling="auto" allowfullscreen 
            // style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
            ></iframe>
        </Container>
    )
}
