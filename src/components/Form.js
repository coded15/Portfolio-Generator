import FormGroup from "./Bootstrap/FormGroup";

const Form = ({ FormData, onChange }) => {
  const Desc = {
    FullName: ["text", "Full Name", "This is your full name."],
    FirstName: [
      "text",
      "First Name",
      "Please enter your First Name or given name.",
    ],
    LastName: ["text", "Last Name", "Please enter your Last Name or surname."],
    Thumbnail: [
      "text",
      "Your Photo",
      "Please upload your photo in a CDN (Ex. Imgur) and paste the Direct Image URL here.",
    ],
    URL: [
      "text",
      "website link",
      "Please enter the URL of your website, where, this page is going to be hosted.",
    ],
    Description: ["text", "About you", "Write something nice about you."],
    KeyWords: [
      "text",
      "Keywords",
      "If someone wants to search for you, what keywords should they use.",
    ],
    Address: [
      "text",
      "Where are you?",
      "Type in your full address to get kidnapped.",
    ],
    Phone: [
      "text",
      "Phone Number",
      "Please Enter your phone number so that we can call you in the midnight.",
    ],
    Email: ["email", "Email Address", "Tell us your Primary Email Address."],
  };
  return (
    <div className="Form">
      {Object.keys(FormData).map(fd => (
        <FormGroup
          key={fd}
          Label={Desc[fd][1]}
          Type={Desc[fd][1]}
          Id={fd}
          Desc={Desc[fd][2]}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Form;
