import PDFViewer from "../components/PDFViewer";
import NavBar from "../components/Navbar";
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
