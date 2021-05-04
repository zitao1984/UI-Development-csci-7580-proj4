import {useDispatch,useSelector} from "react-redux";
import {useState,useRef, useEffect} from "react";
import{updateSave} from "../redux/actions";
import {Tooltip} from "bootstrap";

const JobPost =props=>{
    const [save,setSaved]=useState({
        value:false})
    const [tooltipOpen, toggleTooltip] = useState(false);
    const savedList =useSelector(state=>state.saved)
    const tooltipRef = useRef();

    const dispatch = useDispatch();

    let changeSave=()=>{
        setSaved({
            value:!save.value
        });
        dispatch(updateSave(props.job.id,save.value));

    }
    const checked=!!(savedList.includes(props.job))



    useEffect(() => {
        let tooltip = tooltipRef.current; // Get the DOM element using the ref
        let bsTooltip = Tooltip.getInstance(tooltip); // Get an instance of Bootstrap's Tooltip plugin

        if (!bsTooltip) {
            // Initializes the tooltip when the page first loads
            bsTooltip = new Tooltip(tooltip);
        }
        else {
            // Shows or hides the tooltip as appropriate
            tooltipOpen && !props.tips ? bsTooltip.show() : bsTooltip.hide();
        }
    })



    return(

        <div className="card border-success mb-3 border-2 rounded-2" >
            <div className="card-header ">
                <h5>Job ID: <span className="text">{props.job.id}</span></h5>
                <h5>Company: <span className="text"><a href={props.job.company_url}>{props.job.company}</a></span></h5>
                <h5>Skills: <span className="text">{props.job.skills.toString()}</span></h5>
                <h5>Post time: <span className="text">{props.job.created_at}</span></h5>
            </div>
            <div  className="card-body text-dark">
                    <div className={"card-title"}
                         ref={tooltipRef}
                         data-bs-toggle="tooltip"
                         data-bs-placement="top"
                         data-bs-trigger="manual"
                         title="Save the job you like."
                         onPointerEnter={() => toggleTooltip(true)}
                         onFocus={() => toggleTooltip(true)}
                         onPointerOut={() => toggleTooltip(true)}
                         onBlur={() => toggleTooltip(true)}>
                        <div><h3 className="card-title myTitle">{props.job.title}</h3></div>
                        <div >
                            <input type="checkbox" className="btn-check"  id={"button_"+props.job.id} checked={checked}
                                   onClick={()=>changeSave()}/>

                                <label className="btn btn-outline-success" htmlFor={"button_"+props.job.id}>Save</label>
                        </div>
                    </div>
                <div>
                    <ul>
                        <li>{props.job.location}</li>
                        <li>{props.job.type}</li>
                        <li>{props.job.description}</li>
                    </ul>
                </div>

                <div className="row button-container">
                    <a href={props.job.how_to_apply} className="btn btn-primary active" role="button" aria-pressed="true">Apply</a>
                </div>

            </div>

        </div>
    )
}

export default JobPost
