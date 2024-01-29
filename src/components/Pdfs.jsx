
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';


export default function Pdfs(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }
// The required above it's extremely important. Just file="props.file" doesn't work, because he doesn't know what to do with the string, even if I have the imports at the beginning of the .jsx file. A require it's needed in this case, so that React can import the file based on the props (the location to find it depends on it)
  return (
    <div  className='pdfs' >
      <Document  file={require(`../external/projs/pdfs/${props.file}.pdf`)} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.apply(null, Array(numPages)) 
          .map((x, i) => i + 1)
          .map((page) => {
            // The key has to depend on props.k and the page. Because this is working by mapping each page. If each page has the same key = props.key, documents with more than one page would render with the same key "n pages" repeatedly, meaning, that the key wouldn't be unique
            return ( 
              <Page key={`${props.k}-${page}`}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
      </Document>

    </div>
  );
}

 // const pdfURL = "../external/projs/pdfs/teste1.pdf";