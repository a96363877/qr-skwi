export const Loader = (props: { show: boolean }) => {
    return (
      <div
        style={{
          display: props.show ? "flex" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.5)", 
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <img
          src="/spp.gif"
          alt="Loading"
          width={90}
          style={{ display: "block" }}
        />
      </div>
    );
  };
  