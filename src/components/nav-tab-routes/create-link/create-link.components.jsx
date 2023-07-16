import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useState} from 'react';
import './create-link.styles.scss';
// import SocialMedia from './social-media/social-media.component';
// import Monetization from './monetization/monetization.component';

const defaultFormFields = {
    mandatoryFormFields:
        {title:'',
        destinationLink:'',
        customURL:''},
    socialMediaFormFields: [],
    monetizationFormFields: []
};
const monetizationOptions = [
    {
      value: '1',
      label: 'click on add',
    },
    {
      value: '2',
      label: 'download extension',
    },
    {
      value: '3',
      label: 'accept notification',
    },
  ];
let SocialMediaCount =0;
let MonetizationCount = 0;
let submittedFormFields= {};

const CreateLinkForm = () =>{

    //use state hooks
    const [mandatoryFF, setMandatoryFF] = useState(defaultFormFields.mandatoryFormFields);
    const [socialMediaFF, setSocialMediaFF] = useState(defaultFormFields.socialMediaFormFields);
    const [monetizationFF, setMonetizationFF] = useState(defaultFormFields.monetizationFormFields);

    //destructuring mandatory fields
    let {title, destinationLink, customURL} = mandatoryFF;
    let {socialMediaFormFields} = socialMediaFF;
    let {monetizationFormFields} = monetizationFF;

    //change handling methods
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setMandatoryFF({...mandatoryFF, [name]:value});
    };
    let handleChange_SM = (i, e) => {
        console.log(i)
        let newFormValues = [...socialMediaFF];
        newFormValues[i][e.target.name] = e.target.value;
        console.log(newFormValues[i])
        setSocialMediaFF(newFormValues);
        console.log(newFormValues)
    }
    let handleChange_M = (i, e) => {
        let newFormValues = [...monetizationFF];
        newFormValues[i][e.target.name] = e.target.value;
        setMonetizationFF(newFormValues);
        console.log(newFormValues)
    }

    //field addition methods
    let addFormFields_SM = () => {
        if(SocialMediaCount<=4)
        {SocialMediaCount++;
        setSocialMediaFF([...socialMediaFF, { socialMediaTask: "", socialMediaUrl: "" }])}
        else{
            alert("only 5 can be added")
        }
    }
    let addFormFields_M = () => {
        if(MonetizationCount<=2)
        {MonetizationCount++;
        setMonetizationFF([...monetizationFF, { monetizationTask: ""}])}
        else{
            alert("only 3 can be added")
        }
    }
    
    //field remover methods
    let removeFormFields_SM = (i) => {
        let newFormValues = [...socialMediaFF];
        newFormValues.splice(i, 1);
        setSocialMediaFF(newFormValues)
        SocialMediaCount--;
    }
    let removeFormFields_M = (i) => {
        let newFormValues = [...monetizationFF];
        newFormValues.splice(i, 1);
        setMonetizationFF(newFormValues)
        MonetizationCount--;
    }

    //handling submit
    const handleSubmit = (event) => {
        window.alert("Link Created");
        event.preventDefault();
        submittedFormFields = {...mandatoryFF, socialMediaFF, monetizationFF}
        console.log(submittedFormFields);
        alert(JSON.stringify(submittedFormFields));
        resetFormFields();
    } 

    //resetting
    const resetFormFields = () =>{
        setMandatoryFF(defaultFormFields.mandatoryFormFields);
        setSocialMediaFF([]);
        setMonetizationFF([]);
        SocialMediaCount = 0;
        MonetizationCount = 0;
    }

    return(
        <div className='create-link-container'>
            <div className='link-settings'>
                <Container>
                    {/* Heading */}
                    <Row>
                        <p className='box-heading'>LINK SETTINGS</p>
                    </Row>

                    {/* Mandatory fields */}
                    <Row>
                        <label className='label-styles'>
                            Title
                        </label>
                        <br/>
                        <input 
                            className='text-field-styles'
                            type='text' 
                            name='title'
                            required 
                            value={title}
                            onChange={handleChange}  
                        />
                    </Row>
                    <Row>
                        <label className='label-styles'>
                            Destination Link
                        </label>
                        <br/>
                        <input 
                            className='text-field-styles'
                            type='text'
                            name='destinationLink' 
                            required 
                            value={destinationLink}
                            onChange={handleChange} 
                        />
                        
                    </Row>
                    <Row>
                        <label className='label-styles'>
                            Custom URL
                        </label> 
                        <br/>
                        <input 
                            className='text-field-styles'
                            type='text' 
                            name='customURL' 
                            required 
                            value={customURL}
                            onChange={handleChange} 
                        />
                    </Row>

                    {/* Social Media Fields */}
                    <Row>
                        <div>
                            <p className='box-heading'>
                                ADD SOCIAL MEDIA {SocialMediaCount}/5
                                <Button className="button add"
                                        type="button"
                                        onClick={ addFormFields_SM }>
                                            <AddRoundedIcon/>
                                </Button>
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='optional-field-styles'>
                            {socialMediaFF.map((element, index) => (
                                <div className="add-optional-field-styles" key={index}>
                                    <Col xs={4}>
                                        <Row>
                                        <label className='label-styles'> Task </label>
                                        </Row>
                                        <Row>
                                        <select 
                                            className="select-styles"
                                            name="socialMediaTask"
                                            onChange={e => handleChange_SM(index, e)}
                                            required>
                                            <option className="first-option-styles" value= {""} ></option>
                                            <optgroup className="option-styles" label="Youtube">
                                                <option value= {"1"} >Subscribe and Turn On Notification</option>
                                                <option value= {"2"} >Subscribe</option>
                                                <option value= {"3"} >Post a comment</option>
                                                <option value= {"4"} >Like a video</option>
                                                <option value= {"5"} >Like and comment</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="LinkedIn">
                                                <option value= {"6"} >Company follow</option>
                                                <option value= {"7"} >Connect</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Behance">
                                                <option value= {"8"} >Follow</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Twitch">
                                                <option value= {"9"} >Follow</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Spotify">
                                                <option value= {"10"} >Follow artist</option>
                                                <option value= {"11"} >Like song or album</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Twitter">
                                                <option value= {"12"} >Follow user</option>
                                                <option value= {"13"} >Like tweet</option>
                                                <option value= {"14"} >Reply to tweet</option>
                                                <option value= {"15"} >Retweet</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Soundcloud">
                                                <option value= {"16"} >Follow user</option>
                                                <option value= {"17"} >Like track</option>
                                                <option value= {"18"} >Repost track</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="TikTok">
                                                <option value= {"19"} >Follow user</option>
                                                <option value= {"20"} >Like a video</option>
                                                <option value= {"21"} >Post</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Instagram">
                                                <option value= {"22"} >Follow user</option>
                                                <option value= {"23"} >Like post</option>
                                                <option value= {"24"} >Post a comment</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Telegram">
                                                <option value= {"25"} >Join channel</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Discord">
                                                <option value= {"26"} >Join server</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Behance">
                                                <option value= {"27"} >Like a page</option>
                                                <option value= {"28"} >Like a post</option>
                                                <option value= {"29"} >Post a comment</option>
                                                <option value= {"30"} >Share post</option>
                                            </optgroup>
                                            <optgroup className="option-styles" label="Other">
                                                <option value= {"31"} >Visit page</option>
                                            </optgroup>
                                        </select>
                                        </Row>
                                    </Col>
                                    <Col xs={{ span: 4, offset: 2 }}>
                                        <Row>
                                        <label className='label-styles'>Url</label>
                                        </Row>
                                        <Row>
                                        <input 
                                            className='text-field-styles'
                                            type="url" 
                                            name="socialMediaUrl" 
                                            value={element.socialMediaUrl || ""} 
                                            onChange={e => handleChange_SM(index, e)} 
                                            required
                                        />
                                        </Row>
                                    </Col>
                                    <Col xs={{ span: 1, offset: 1 }}>
                                    {
                                        (index+1)>0 ? 
                                        <Button type="button"  className="remove-button" onClick={() => removeFormFields_SM(index)}><CloseRoundedIcon/></Button> 
                                        : null
                                    }
                                    </Col>
                                </div>  
                            ))}
                        </div>
                    </Row>
                    
                    {/* Monetization fields */}
                    <Row>
                        <div>
                            <p className='box-heading'>
                                ADD MONETIZATION {MonetizationCount}/3
                                <Button className="button add"
                                        type="button"
                                        onClick={ addFormFields_M }>
                                            <AddRoundedIcon/>
                                </Button>
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='optional-field-styles'>
                            {monetizationFF.map((element, index) => (
                                <div className="add-optional-field-styles" key={index}>
                                        <Col xs={4}>
                                            <Row>
                                                <label className='label-styles'>Task</label>
                                            </Row>
                                            <Row> 
                                                <select 
                                                    className="select-styles"
                                                    name="monetizationTask"
                                                    onChange={e => handleChange_M(index, e)}
                                                    required>
                                                    <option className="first-option-styles" value= {""} ></option>
                                                    <option className="option-styles" value= {"1"} >Click on Ad</option>
                                                    <option className="option-styles" value= {"2"} >Download Extension</option>
                                                    <option className="option-styles" value= {"3"}  >Accept Notification</option>
                                                </select>
                                            </Row>
                                        </Col>
                                        <Col xs={{ span: 2, offset: 0 }}>
                                        {
                                            (index+1)>0 ? 
                                            <Button type="button"  className="remove-button" onClick={() => removeFormFields_M(index)}><CloseRoundedIcon/></Button> 
                                            : null
                                        }
                                        </Col> 
                                    </div>  
                                ))}
                        </div>
                    </Row> 

                    {/* Submit button */}
                    <Button className="button submit" type="submit" onClick={handleSubmit}>Submit</Button>
                </Container>
            </div>
            <div className='preview'>
                
            </div>
        </div>
    );
}

export default CreateLinkForm;
