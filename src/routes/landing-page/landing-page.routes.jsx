// import { useNavigate } from 'react-router-dom';

// const LandingPage = () =>{
// const navigate = useNavigate();

//     return(
//         <div>
//             <h2>landing page</h2>
            
//             <button onClick={()=>navigate("/login")}>LOGIN</button>
//             <button onClick={()=>navigate("/register")}>LOGIN</button>
//         </div>
//     );
// }

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';

import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';
import AlarmOnRoundedIcon from '@mui/icons-material/AlarmOnRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import DonutSmallTwoToneIcon from '@mui/icons-material/DonutSmallTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import VerticalSplitTwoToneIcon from '@mui/icons-material/VerticalSplitTwoTone';
import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';

import image from "../../assets/logo_final.png";
import finance from "../../assets/finance.png"
import dashboard from "../../assets/dashboard.png"
import more_features from "../../assets/more_features.png"
import './landing-page.styles.scss';

function readMore1(){
    const dots = document.getElementById("dots1");
    const moreText = document.getElementById("more1");
    const btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function readMore2(){
    const dots = document.getElementById("dots2");
    const moreText = document.getElementById("more2");
    const btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
function LandingPage() {
    const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 5
      },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 850 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

    return (
        <>
            <Navbar  className="mb-3" collapseOnSelect expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#"><img src={image} alt='S'></img>StanOwL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#action1">How it Works?</Nav.Link>
                        <Nav.Link href="#action2">FAQ</Nav.Link>
                        <Nav.Link href="#action3">Contact US</Nav.Link>
                        <Nav.Link href="#action4">Blog</Nav.Link>
                        <Button onClick={()=>navigate("/login")}>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div className='section-1'>
                <div className='not-nav'>
                <Container>
                    <Row>
                        <Col xs={12} lg={7}>
                            <h3>Maximize Your Earnings with <br/> StanOwL - Your Link to Passive Income</h3>
                            <p>Welcome to StanOwL, the ultimate platform for publishers looking to earn by sharing links.<br/> Get clicks from all over the globe and earn. We offer one of the highest payout rates in the game, and a super easy-to-use dashboard.<br/> Join our fam and start earning now!</p>
                            <div className='section-1-buttons'>
                                <Button onClick={()=>navigate("/register")}>Register Now!</Button>
                            </div>
                        </Col>
                        <Col xs={12} lg={5}>
                            <img src={finance}/>
                        </Col>
                    </Row>
                    </Container>
                {/* <a href='https://pngtree.com/so/finance'>finance png from pngtree.com/</a> */}                  
                </div>
            </div>

            <div className='section-2' >
                <Carousel
                    responsive={responsive}
                    containerClass="carousel-container"
                    renderButtonGroupOutside={true}
                    >
                    <div className='card-border'>
                        <Card>
                            <Card.Body>
                                <Card.Title><AccountBalanceWalletRoundedIcon className='feature-icon'/><br/>Better Payouts</Card.Title>
                                <Card.Text>
                                    Our competitive payout rates are among the highest in the industry, which means that our publishers can earn more revenue with their links than they would with other platforms. StanOwL offers weekly payouts, which provide a faster and more reliable stream of income for our publishers. This approach is more transparent, trustworthy, and motivating for our publishers, which ultimately leads to better results for our platform.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><FastForwardRoundedIcon className='feature-icon'/><br/>Faster Access to Earnings</Card.Title>
                                <Card.Text>
                                    We know that our publishers rely on their earnings to grow their business and cover their expenses. By offering timely payouts, we're able to provide them with fast and reliable access to their funds, ensuring the money flow our publishers need.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><AlarmOnRoundedIcon className='feature-icon'/><br/>Timely Payments</Card.Title>
                                <Card.Text>
                                    We prioritise trust and transparency with our publisher network at StanOwL and have built a strong reputation within the industry as a reliable partner. Our weekly payouts and clear earnings statements help build a strong relationship with our publishers and provide them with a straightforward understanding of their earnings.                                
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><SentimentSatisfiedAltRoundedIcon className='feature-icon'/><br/>Easy-to-Use Platform</Card.Title>
                                <Card.Text>
                                Our platform is designed to be easy to use, with a simple interface that makes it easy for publishers to create, manage, and optimize their links. We also provide detailed reporting and analytics tools that enable our publishers to track their earnings and performance.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><HandshakeRoundedIcon className='feature-icon'/><br/>Transparent and Trustworthy</Card.Title>
                                <Card.Text>
                                We prioritise trust and transparency with our publisher network at StanOwL and have built a strong reputation within the industry as a reliable partner. Our weekly payouts and clear earnings statements help build a strong relationship with our publishers and provide them with a straightforward understanding of their earnings.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><CodeRoundedIcon className='feature-icon'/><br/>Continuous Improvement</Card.Title>
                                <Card.Text>
                                We are committed to continuous improvement and are always looking for ways to enhance our platform and improve our services. Our team of experts is constantly working to develop new features, optimize our technology, and provide our publishers with the best possible experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><TrendingUpRoundedIcon className='feature-icon'/><br/>Advanced Technology</Card.Title>
                                <Card.Text>
                                StanOwL uses advanced technology and analytics to optimize link monetization and help publishers earn the most revenue possible. Our technology is regularly updated and improved to ensure that our publishers stay ahead of the curve.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><StarBorderRoundedIcon className='feature-icon'/><br/>Quality Advertisers</Card.Title>
                                <Card.Text>
                                We work with a network of high-quality advertisers who are eager to partner with our publishers. This means that our publishers have access to the best brands and products, which can help to increase click-through rates and revenue.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><SupportAgentRoundedIcon className='feature-icon'/> <br/>Excellent Support</Card.Title>
                                <Card.Text>
                                Our dedicated support team is available 24/7 to assist publishers with any questions or concerns they may have. We're committed to providing our publishers with the best support possible, and we're always available to help them succeed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Card.Body>
                                <Card.Title><AttachMoneyRoundedIcon className='feature-icon'/><br/>Flexible Monetization Options</Card.Title>
                                <Card.Text>
                                StanOwL offers a range of monetization options to suit the needs of different publishers. Whether you're looking to monetize links, social media, or other content, we have the expertise and technology to help you succeed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    
                    
                </Carousel>
            </div>

            <div className='section-3'>
                <Row>
                    <Col lg={9} className='content'>
                        <h3 className='heading'>Unique Dashboard</h3>
                        <p>StanOwL's Dashboard is a powerful all-in-one platform which provide a wide range of tool and features to help you better understand your audience and create content that resonates with them.</p>
                        <p className='features'>
                        <DonutSmallTwoToneIcon className='icon'/>Detailed breakdown of your earnings<br/>
                        <GroupsTwoToneIcon className='icon'/>Detailed analytics on your audience demographics, such as age, gender, location, and interests<br/>
                        <EventAvailableTwoToneIcon className='icon'/>Daily, weekly and monthly earnings report with click-through rate, conversion rate, and other important metrics<br/>
                        </p>
                    </Col>
                    <Col lg={3}>
                        <img src={dashboard}/>
                    </Col>
                </Row>
            </div>

            <div className='section-4'>
                <Row >
                    <Col lg={3}>
                        <img src={more_features}/>
                    </Col>
                    <Col lg={9} className='content'>
                        <h3 className='heading'>But wait, that's not all !</h3>
                        <p>StanOwL offers a wide range of optimization tools to help you improve your earnings even further.</p>
                        <p className='features'>
                        <AutoFixHighTwoToneIcon className='icon'/>Create custom campaigns and links to track your performance in real-time.<br/>
                        <VerticalSplitTwoToneIcon className='icon'/>Split-test different landing pages to see which ones perform best.<br/>
                        <AutoAwesomeTwoToneIcon className='icon'/>Get personalized recommendations on how to optimize your campaigns for maximum results.<br/>
                        </p>
                        <p>With StanOwL, you have everything you need to succeed as a publisher in today's competitive market. <br/>
                        So why wait? Sign up today and start earning more with every click!<br/></p>
                            <Button onClick={()=>navigate("/register")}>Let's get started</Button>
                    </Col>
                </Row>
            </div>
            <div className='section-5'>
                <h3>About Us</h3>
                <p>StanOwL is the ultimate platform for all the publishers out there looking to earn by sharing your links! With StanOwL, you can make money just by getting clicks from anywhere on the globe. The more clicks you get, the more money you make, straight up! <br/>
                We know that every penny counts, which is why we offer one of the highest payout rates in the industry and on time payouts are just the cherry on top of the cake. So whether you're a blogger, a social media influencer, or just a content creator looking for extra income or a side hustle, come start your journey with StanOwL fam and start earning today.</p>
            </div>
            <div  className='section-6'>
                <hr/>
                <p>© 2023 StanOwL All Rights Reserved</p>
            </div>
    </>
  );
}

export default LandingPage;