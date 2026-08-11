import bg from "../../assets/bg.png";

const Background = ({ children }) => {
  return (
    <div
      className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat p-5 sm:p-4 lg:p-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </div>
  );
};

export default Background;