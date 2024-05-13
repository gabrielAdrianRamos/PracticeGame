// ...
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Experience } from "./Experience";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function App() {
  const map = useMemo(() => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.jump, keys: ["Space"] },
  ]);

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas camera={{ position: [10, 10, 10], fov: 30 }} shadows>
          <color attach="background" args={["#ececec"]} />
          <Physics>
            <Experience />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
