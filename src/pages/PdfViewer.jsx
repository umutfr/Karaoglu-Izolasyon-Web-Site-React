import { useParams } from "react-router-dom";

const PdfViewer = () => {
  const { file } = useParams();

  return (
    <div style={{ width: "100%", height: "100vh", background: "#000" }}>
      <iframe
        src={`/pdfs/${file}.pdf`}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default PdfViewer;
