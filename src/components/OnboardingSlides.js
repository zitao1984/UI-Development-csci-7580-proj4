import {useState} from "react";
import {useDispatch} from "react-redux";
import Slide from "./Slide";
import SlideIndicator from "./SlideIndicator";
import {completeOnboarding} from "../redux/actions";

const TOTAL_SLIDES = 4;

const OnboardingSlides = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    const dispatch = useDispatch();

    const setSlideState = id => {
        if (id === activeSlide)
            return "active";
        return "inactive";
    }

    const nextSlide = () => {
        let id = activeSlide;
        id < TOTAL_SLIDES ? setActiveSlide(id + 1) : dispatch(completeOnboarding());
    }

    const generateSlideIndicators = () => {
        let indicators = [];
        for (let i = 1; i <= TOTAL_SLIDES; i++) {
            indicators.push(
                <SlideIndicator slideStatus={setSlideState(i)} key={i} 
                                slideID={i} 
                                clickHandler={() => setActiveSlide(i)} />
            )
        }
        return indicators;
    }

    return (
        <div className="slides-bg">
            <Slide slideStatus={setSlideState(1)} slideId={1}>
                <h1>Access your job list from anywhere</h1>
                <p>Your saved jobs automatically sync on all your devices.</p>
                <div className="fit my-4">
                    <img src={process.env.PUBLIC_URL + "/onBoarding1.svg"}
                        className="img-fluid my-4 float-right fit" alt="The Todo app on iPad and iPhone" />
                </div>
            </Slide>
            <Slide slideStatus={setSlideState(2)} slideId={2}>
                <h1>Save as many jobs as you want </h1>
                <p>Simply by two clicks
                </p>
                <div className="fit my-4">
                    <img src={"https://media.giphy.com/media/Wn1TGSnnHFC8qpPVFo/giphy.gif"}
                         className="img-fluid img-change"
                         alt="One click to save the job" />
                </div>
            </Slide>
            <Slide slideStatus={setSlideState(3)} slideId={3}>
                <h1>Select jobs by your own language preference</h1>
                <p>Select/unselect the job language requirements based on your preference
                </p>
                <div className="fit my-4">
                    <img src={"https://media.giphy.com/media/oMfGYwZEt6uUFs9zuv/giphy.gif"}
                         className="img-fluid img-change"
                         alt="Select/unselect the job language requirements based on your preference" />

                </div>
            </Slide>
            <Slide slideStatus={setSlideState(4)} slideId={4}>
                <h1>Find the most popular jobs</h1>
                <p>You can easily oder job by their popularity.
                </p>
                <div className="fit my-4">
                    <img src={"https://media.giphy.com/media/Nj8umwzIXWnx0VzIKX/giphy.gif"}
                         className="img-fluid img-change"
                         alt="You can easily oder job by their popularity." />

                </div>
            </Slide>
            <div className="slides-controls">
                <button className="align-left control-btn" onClick={() => dispatch(completeOnboarding())}>Skip</button>

                <div className="align-center">
                    {generateSlideIndicators()}
                </div>
                <button className="align-right control-btn" onClick={nextSlide}>
                    {
                        activeSlide < TOTAL_SLIDES ? "Next" : "Done"
                    }
                </button>
            </div>
        </div>
    )
}

export default OnboardingSlides;