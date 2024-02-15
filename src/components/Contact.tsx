import BodyFour from "./Footer";
import ContactBodyThree from "./ContactBodyThree";
import ContactBodyTwo from "./ContactBodyTwo";
import Header from "./Header";
const Contact = () => {
  return (
    <>
      <Header />
      <div className=" bg-slate-400">
        <ContactBodyThree />
        <ContactBodyTwo />
      </div>
      <BodyFour />
    </>
  );
};
export default Contact;
