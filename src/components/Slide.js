const Slide = (props) => 
    <div className={"slide-" + props.slideStatus} >
        {props.children}
    </div>

export default Slide;