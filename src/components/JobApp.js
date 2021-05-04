import {useSelector} from "react-redux";
import OnboardingSlides from "../components/OnboardingSlides";
import JobList from "./JobList";

const JobApp = () => {
    const onboardingComplete = useSelector(state => state.user.onboardingComplete);
    // console.log("from App "+onboardingComplete)
    if (onboardingComplete) {
        return (
            <>
                <JobList/>
            </>
        )
    }

    else {
        return (
            <OnboardingSlides/>
        )
    }
}

export default JobApp;