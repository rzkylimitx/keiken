import PDFViewer from "../components/PDFViewer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Legalitas = () => {
    return (
        <div>
            <NavBar />
            <PDFViewer fileUrl="/legalitas.pdf" />
            <Footer />
        </div>
    );
};

export default Legalitas;
