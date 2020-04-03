/*global ReactDOM*/
const divEl=document.getElementById("root");
function Strikethrough(props){
	return (<p style={{textDecoration:"line-through"}}>{props.text}</p>);
}
ReactDOM.render(<Strikethrough text="ReactJS is not widely used"/>,divEl);

function StandardImageView(src){
    return (
        <img src={src.src}/>
        );
}
function RoundedCornersImageView(src){
    return(
        <img  style={{borderRadius:"30px"}} src={src.src}/>
        );
}
function CircularImageView(src){
    return(
        <img style={{borderRadius:"75px"}} src={src.src}/>
        );
}
function ImageViews(){
    return (<div>
        <div className="background">
        <StandardImageView src="assets/koru-sprial-shape.jpg"/>
        </div>
        <div style={{borderRadius:"30px"}} className="background">
        <RoundedCornersImageView src="assets/koru-sprial-shape.jpg"/>
        </div>
        <div style={{borderRadius:"75px"}} className="background">
        <CircularImageView src="assets/koru-sprial-shape.jpg"/>
        </div>
        </div>);
}
ReactDOM.render(<ImageViews/>,divEl);


function AlertMessage(props){
    switch(props.messageType){
        case "success":return (
                <SuccessMessage messageText={props.messageText}/>
                );
        case "warning":return (
                <WarningMessage messageText={props.messageText}/>
                );
        case "info":return (
                <InfoMessage messageText={props.messageText}/>
                );
        case "error":return (
                <ErrorMessage messageText={props.messageText}/>
                );
    }
    
}
function SuccessMessage(props){
    return(
        <div style={{background:"#28a745"}}>
        <p>{props.messageText}</p>
        </div>
        );
}
function WarningMessage(props){
    return(
        <div style={{background:"#ffc107"}}>
        <p>{props.messageText}</p>
        </div>
        );
}
function InfoMessage(props){
    return(
        <div style={{background:"#17a2b8"}}>
        <p>{props.messageText}</p>
        </div>
        );
}
function ErrorMessage(props){
    return(
        <div style={{background:"#dc3545"}}>
        <p>{props.messageText}</p>
        </div>
        );
}


let content=(<div><AlertMessage messageText="SuccessMessage" messageType="success"/>
            <AlertMessage messageText="WarningMessage" messageType="warning"/>
            <AlertMessage messageText="InfoMessage" messageType="info"/>
            <AlertMessage messageText="ErrorMessage" messageType="error"/>
            </div>);
ReactDOM.render(content,divEl);