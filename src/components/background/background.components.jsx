import './background.styles.css';

const Background = () => {
    return(
        <div className="row container-fluid">
            <div className="col lg md sm">
                <div className="square s2"></div>
                <div className="square s3"></div>
            </div>
            <div className="col md sm">
                <div className="square s3"></div>
                <div className="square s2"></div>
            </div>
            <div className="col sm">
                <div className="square s4"></div>
                <div className="square s1"></div>
            </div>
            {/* <div className="col">
                <div className="square s1"></div>
                <div className="square s4"></div>
            </div>
             */}
            <div className="col sm">
                <div className="square s2"></div>
                <div className="square s3"></div>
            </div>
            {/* <div className="col ">
                <div className="square s1"></div>
                <div className="square s4"></div>
            </div> */}

            <div className="col sm">
                <div className="square s4"></div>
                <div className="square s1"></div>
            </div>
            <div className="col md sm">
                <div className="square s3"></div>
                <div className="square s2"></div>
            </div>		
            <div className="col lg md sm">
                <div className="square s2"></div>
                <div className="square s3"></div>
            </div>
        </div>
    );
}
export default Background;