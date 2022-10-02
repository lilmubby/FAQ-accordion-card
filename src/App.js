import Heading from "./components/Heading";
import ToDisplay from "./components/ToDisplay";
import Image from "./components/Image";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Image />
      <div className="text-container">
        <Heading title="FAQ" />
        <ToDisplay
          // src="../images/icon-arrow-down.svg"
          question="How many team members can I invite?"
          answers="You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan."
        />
        <ToDisplay
          // src="../images/icon-arrow-down.svg"
          question="What is the maximum file upload size?"
          answers="No more than 2GB. All files in your account must fit your allotted storage space."
        />
        <ToDisplay
          // src="../images/icon-arrow-down.svg"
          question="How do I reset my password?"
          answers="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        />
        <ToDisplay
          // src="../images/icon-arrow-down.svg"
          question="Can I cancel my subscription?"
          answers="Yes! Send us a message and we'll process your request no questions asked."
        />
        <ToDisplay
          src="../images/icon-arrow-down.svg"
          question="Do you provide additional support?"
          answers="Chat and email support is available 24/7. Phone lines are open during normal business hours."
        />
      </div>
    </div>
  );
}

export default App;
