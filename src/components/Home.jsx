import profile from "../assets/profile.jpg";

export default function Home() {
    return (
        <div className="section" id="home">
        <h2>Home</h2>

        <div className="home-box">
            <img src={profile} alt="My Profile" className="profile-pic"/>
        </div>
        <p>Hello! I'm Amit Vashisht - a Software Developer (Frontend)</p>
        </div>
    );
}