import {useState, useRef, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { logout,  startOnboarding, completeOnboarding, updateSave} from "../redux/actions";
import {Tooltip} from "bootstrap";
import JobPost from "./JobPost";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserTie,faSortAmountUp} from "@fortawesome/free-solid-svg-icons";

const JobList = () =>{
    const [python, setPython] = useState(true);
    const [java, setJava] = useState(true);
    const [javascript,setJavascript] = useState(true);
    const [cPlus,setCPlus] = useState(true);
    const [c,setC] = useState(true);
    const [mySQL, setMySQL] = useState(true);

    const [tips,setShowTips] = useState(true);
    const [shownSavedJob, setShownSavedJob]=useState(false);
    const [orderBySave,setOrderBySave]=useState(false);
    const [tooltipOpen, toggleTooltip] = useState(false);

    const savedJobs = useSelector(state=>state.saved);
    const jobList =useSelector(state=>state.jobs);
    const user=useSelector(state=>state.user)

    const tooltipRef = useRef();

    const dispatch = useDispatch();

    const showTips=()=>{
        setShowTips(false)

    }

    const showSavedJobs = ()=>{
        setShownSavedJob(!shownSavedJob)
        dispatch(updateSave(-1,true))
    }

    const showOrderBySave=()=>{
        setOrderBySave(!orderBySave)
    }

    const restartOnboardingWithLogout =()=>{
        dispatch(startOnboarding())
        dispatch(logout())
    }

    const normalLogOut =()=>{
        dispatch(completeOnboarding())
        dispatch(logout())

    }

    let orderedJobList = jobList.slice().sort((a, b) => (a.saved_times > b.saved_times) ? -1 : 1)
    let orderedSavedJobs = savedJobs.slice().sort((a, b) => (a.saved_times > b.saved_times) ? -1 : 1)

    useEffect(() => {
        let tooltip = tooltipRef.current; // Get the DOM element using the ref
        let bsTooltip = Tooltip.getInstance(tooltip); // Get an instance of Bootstrap's Tooltip plugin

        if (!bsTooltip) {
            // Initializes the tooltip when the page first loads
            bsTooltip = new Tooltip(tooltip);
        }
        else {
            // Shows or hides the tooltip as appropriate
            // console.log("user onboarding: "+onboardingComplete)
            tooltipOpen && !tips ? bsTooltip.show() : bsTooltip.hide();
        }
    })

    // console.log("savedJobs: "+savedJobs)
    // console.log("jobs: "+jobList)



    return(
        <>
            <div className="dropdown float-end">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    Wanna Help or Log Out?
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenu2">
                    <li>
                        <button className="dropdown-item" type="button" onClick={() => normalLogOut()}>
                            Logout
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" type="button" onClick={() => restartOnboardingWithLogout()}>
                            Logout with onboarding
                        </button>
                    </li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li>
                        <button className="dropdown-item" type="button" onChange={() => showTips()}>
                            Show Tips
                        </button>
                    </li>
                </ul>
            </div>

                <h1>{user.username}'s Job List <FontAwesomeIcon icon={faUserTie} /></h1>






            <div>
                <div className="row filter-box">
                    <div className="col-4"><h3>Job Filters <FontAwesomeIcon icon={faSortAmountUp} /></h3></div>
                    <div className="col-4 form-check form-switch"
                         ref={tooltipRef}
                         data-bs-toggle="tooltip"
                         data-bs-placement="top"
                         data-bs-trigger="manual"
                         title="Click to show saved work."
                         onPointerEnter={() => toggleTooltip(true)}
                         onFocus={() => toggleTooltip(true)}
                         onPointerOut={() => toggleTooltip(false)}
                         onBlur={() => toggleTooltip(false)}>
                        <input className="form-check-input" type="checkbox" id="showSaved"
                               onChange={() => showSavedJobs()}/>
                        <label className="form-check-label fw-bolder fs-5" htmlFor="showSaved">Show saved jobs</label>
                    </div>
                    <div className="col-4 form-check form-switch"
                         ref={tooltipRef}
                         data-bs-toggle="tooltip"
                         data-bs-placement="top"
                         data-bs-trigger="manual"
                         title="Order the job from the most popular to the least"
                         onPointerEnter={() => toggleTooltip(true)}
                         onFocus={() => toggleTooltip(true)}
                         onPointerOut={() => toggleTooltip(false)}
                         onBlur={() => toggleTooltip(false)}>
                        <input className="form-check-input" type="checkbox" id="orderBySave"
                               onChange={() => showOrderBySave()}/>
                        <label className="form-check-label fw-bolder fs-5" htmlFor="orderBySave">Order jobs by popularity</label>
                    </div>
                </div>


                <div className="row btn-group-change"
                     ref={tooltipRef}
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-trigger="manual"
                     title="Click to choose or unchoose the language preference."
                     onPointerEnter={() => toggleTooltip(true)}
                     onFocus={() => toggleTooltip(true)}
                     onPointerOut={() => toggleTooltip(false)}
                     onBlur={() => toggleTooltip(false)}>
                    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" className="btn-check " id="showPython"
                               checked={python} onChange={() => setPython(!python)}/>
                        <label className="col-sm btn btn-outline-primary" htmlFor="showPython">Python</label>

                        <input type="checkbox" className="btn-check" id="showJava"
                               checked={java} onChange={() => setJava(!java)}/>
                        <label className="col-sm btn btn-outline-primary" htmlFor="showJava">Java</label>

                        <input type="checkbox" className="btn-check" id="showJavascript"
                               checked={javascript} onChange={() => setJavascript(!javascript)}/>
                        <label className="col-sm btn btn-outline-primary" htmlFor="showJavascript">Javascript</label>

                        <input type="checkbox" className="btn-check" id="showCPlus"
                               checked={cPlus} onChange={() => setCPlus(!cPlus)}/>
                        <label className="col-sm btn btn-outline-primary" htmlFor="showCPlus">C#</label>

                        <input type="checkbox" className="btn-check" id="showC"
                               checked={c} onChange={() => setC(!c)}/>
                        <label className="col-sm btn btn-outline-primary" htmlFor="showC">C</label>

                        <input type="checkbox" className="btn-check" id="showMySQL"
                               checked={mySQL} onChange={() => setMySQL(!mySQL)}/>
                        <label className="col-sm btn btn-outline-primary" htmlFor="showMySQL">MySQL</label>
                    </div>
                </div>
            </div>
            <div className="todo-list">
                {
                    !orderBySave?
                        (
                            !shownSavedJob?
                            (
                                jobList.map((job, i) =>
                                    (job.skills.includes("Python") && python) || (job.skills.includes("Java") && java)
                                    || (job.skills.includes("Javascript") && javascript)|| (job.skills.includes("C#") && cPlus)
                                    || (job.skills.includes("C") && c)|| (job.skills.includes("MySQL") && mySQL)
                                    ?
                                    <JobPost job={job} tips={tips}/>
                                    :""

                            ))
                                :
                                (savedJobs.map((job, i) =>
                                    (job.skills.includes("Python") && python) || (job.skills.includes("Java") && java)
                                    || (job.skills.includes("Javascript") && javascript)|| (job.skills.includes("C#") && cPlus)
                                    || (job.skills.includes("C") && c)|| (job.skills.includes("MySQL") && mySQL)
                                        ?
                                        <JobPost job={job} tips={tips}/>
                                        :""

                                ))
                        )
                        :(
                            !shownSavedJob?
                                (
                                    orderedJobList.map((job, i) =>
                                        (job.skills.includes("Python") && python) || (job.skills.includes("Java") && java)
                                        || (job.skills.includes("Javascript") && javascript)|| (job.skills.includes("C#") && cPlus)
                                        || (job.skills.includes("C") && c)|| (job.skills.includes("MySQL") && mySQL)
                                            ?
                                            <JobPost job={job} tips={tips}/>
                                            :""

                                    ))
                                :
                                (orderedSavedJobs.map((job, i) =>
                                    (job.skills.includes("Python") && python) || (job.skills.includes("Java") && java)
                                    || (job.skills.includes("Javascript") && javascript)|| (job.skills.includes("C#") && cPlus)
                                    || (job.skills.includes("C") && c)|| (job.skills.includes("MySQL") && mySQL)
                                        ?
                                        <JobPost job={job} tips={tips}/>
                                        :""

                                ))

                        )
                }
            </div>
</>
    )


}

export default JobList