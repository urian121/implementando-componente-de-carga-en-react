import imgNotFault from "../imgs/notfound.gif";

const NoPage = () => {
  return (
    <>
      <h1 className="text-center">NoPage</h1>
      <img src={imgNotFault} alt="NoPage" />
    </>
  );
};

export default NoPage;
