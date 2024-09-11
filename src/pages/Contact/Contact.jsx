import NavBar from "../NavBar/NavBar";
import bgContact from '../../assets/bg-old-city.jpg'

const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${bgContact})` }}
        className="  h-screen">
            <NavBar></NavBar>
            <div className=" xl:w-[1400px] mx-auto mt-10">
                <h2 className="text-white text-4xl">Working on this</h2>
             </div>
        </div>
    );
};

export default Contact;