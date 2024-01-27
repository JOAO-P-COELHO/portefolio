
import { useState } from 'react';
import { Document, Page } from 'react-pdf';



export default function Pdfs(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  let file = props.file
  console.log(file)

 
  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (
    <div className='pdfs' >
      <Document file={require(`../external/projs/pdfs/${props.file}.pdf`)}   onLoadSuccess={onDocumentLoadSuccess}>
      {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
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