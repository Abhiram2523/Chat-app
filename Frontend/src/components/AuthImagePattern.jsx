
const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div
  className="hidden lg:flex items-center justify-center bg-base-200 p-12"
  style={{ backgroundImage: "url(/chat.png)", backgroundSize: "cover", backgroundPosition: "center" }}
>
  <div className="max-w-md text-center">
    <div>
      
    </div>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-base-content/60 drop-shadow-[0_0_6px_white]">{subtitle}</p>
  </div>
</div>
    );
  };
  
  export default AuthImagePattern;