import { EffectComposer, N8AO } from "@react-three/postprocessing";

export const PostProcessing = () => {
  return (
    <>
      <EffectComposer multisampling={8} disableNormalPass>
        <N8AO
          aoRadius={50}
          distanceFalloff={0.2}
          intensity={3}
          screenSpaceRadius
          halfRes
        />
      </EffectComposer>
    </>
  );
};
