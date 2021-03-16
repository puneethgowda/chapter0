import Loader from "react-loader-spinner";

function CustomLoader(loading) {
  if (!loading) return null;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:"#fff",
        width:"100%",
        height:"100%"
      }}
    >
      <Loader type="Puff" color="var(--highlight-primary)" height={"100"} width={"100"} />
    </div>
  );
}

export default CustomLoader;
