import resumePDF from "../assets/Amit_Vashisht_Resume.pdf";

export default function Resume() {
    return (
        <div className="section" id="resume">
            <h2>Resume</h2>
            <a className="btn" href={resumePDF} download>Download Resume</a>
        </div>
    );
}