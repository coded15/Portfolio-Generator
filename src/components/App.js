import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Form from "./Form";

class App extends Component {
  state = {
    Dark: true,
    FormData: {
      FirstName: "Ichchha",
      LastName: "Gupta",
      Thumbnail:
        "https://drive.google.com/uc?export=view&id=1ncbg8jyUeXfeCDlvrGwmW9kmhkXw9asZ",
      URL: "https://www.linkedin.com/in/ichchha-gupta-361b99204/",
      Description: [
        "Hello, I am Ichchha... and I am a Pizza lover.",

        "I am a sophomore at IIT Guwahati. I love to explore, be it exploring new places or new skills, also I love to interact with people and do team projects with them.",

        "In my first year at college, I have worked with many people on a variety of projects and learned plenty of skills.",

        "Some of my skills are:",

        "Web Technologies:",
        "C++, python*, HTML, CSS*, NodeJS*, ReactJS*",

        "Design:",
        "Fusion 360, Adobe After Effects*, Adobe Premiere Pro*, Figma*, MATLAB*, Unity",

        "*elementary proficiency",
      ],
      KeyWords:
        "Ichchha, Gupta, designing, webdeveloper, cad, innovator, creator, enthusiast",
      Address: "Uttar Pradesh, India",
      Phone: "+91**********",
      Email: "ichchhawork@gmail.com",
      Socials: {
        Facebook: "ichchha.gupta.543",
        WhatsApp: "+91**********",
        Instagram: "ichchha._.gupta",
        Twitter: "IchchhaGupta7",
        LinkedIn: "ichchha-gupta-361b99204",
        GitHub: "coded15",
        StackOverflow: "16420004",
      },
      Experience: [
        {
          Role: "Awesome Developer",
          Company: "Google",
          Desc: "Working with Google as an awesome software developer and it's so good that I want everyone to work with me on React and Google.",
          Start: "November 2021",
          End: "Present",
        },
        {
          Role: "Cool Developer",
          Company: "Microsoft",
          Desc: "Working with Microsoft as an awesome software developer and it's so good that I want everyone to work with me on VScode and Microsoft.",
          Start: "November 2020",
          End: "October 2021",
        },
      ],
      Education: [
        {
          Degree: "B.Tech in Mechanical Engineering",
          Institute: "IIT Guwahati",
          Desc: "",
          Start: "Nov 2021",
          End: "Present",
        },
      ],
      Skills: {
        Tools: ["html5", "css3", "react"],
        Workflow: [
          "Mobile-First, Responsive Design",
          "Cross Browser Testing & Debugging",
          "Cross Functional Teams",
          "Agile Development & Scrum",
        ],
      },
      Interests: [
        "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.",

        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.",
      ],
      Awards: [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hackathon 2005",
      ],
    },
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };
  handleChange = e => {
    this.setState({
      FormData: {
        ...this.state.FormData,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Portfolio Generator</span>
          <button
            className={"btn btn-sm btn-outline-primary rounded-circle"}
            onClick={this.toggleHeader}
          >
            <i
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <Form
                FormData={{
                  FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                  ...this.state.FormData,
                }}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Code
                {...this.state.FormData}
                FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
