/* eslint-disable react/no-unknown-property */
export const Lights = () => {
  return (
    <>
      <ambientLight color={"#ffffee"} intensity={0.25} />
      <directionalLight
        color={"#ffeeff"}
        intensity={0.8}
        position={[1, 1, 1]}
      />
      <directionalLight
        color={"#ffffff"}
        intensity={0.8}
        position={[-1, -0.5, -1]}
      />
    </>
  );
};
