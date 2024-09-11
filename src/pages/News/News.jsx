import NavBar from "../NavBar/NavBar";
import bgNews from '../../assets/bg-news-river.jpg'

const News = () => {
    return (
        <div style={{ backgroundImage: `url(${bgNews})` }}
        className=" h-screen bg-no-repeat">
            <NavBar></NavBar>
            <div className=" xl:w-[1400px] mx-auto mt-10">
                <h2 className="text-white text-4xl">Working on this</h2>
             </div>
        </div>
    );
};

export default News;