import { useState } from "react";
import Car from "./Car";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
function App() {
  const [colors, setColors] = useState({
    color1: "#1d1538",
    color2: "#df94a7",
    color3: "#ffb703",
    color4: "#000000",
    color5: "#eb5e28",
    crater1: "#783d20",
    crater2: "#d64c33",
    top: "#947c85",
    tire: "#0a0908",
  });
  return (
    <>
      <div className="colors-input">
        <input
          type="color"
          value={colors.color1}
          onChange={(newColor) =>
            setColors({ ...colors, color1: newColor.target.value })
          }
        />
        <input
          type="color"
          value={colors.color2}
          onChange={(newColor) =>
            setColors({ ...colors, color2: newColor.target.value })
          }
        />
        <input
          type="color"
          value={colors.color3}
          onChange={(newColor) =>
            setColors({ ...colors, color3: newColor.target.value })
          }
        />
        <input
          type="color"
          value={colors.color4}
          onChange={(newColor) =>
            setColors({ ...colors, color4: newColor.target.value })
          }
        />
        <input
          type="color"
          value={colors.color5}
          onChange={(newColor) =>
            setColors({ ...colors, color5: newColor.target.value })
          }
        />
        <input
          type="color"
          value={colors.crater1}
          onChange={(newColor) =>
            setColors({ ...colors, crater1: newColor.target.value })
          }
        />
        <input
          type="color"
          value={colors.top}
          onChange={(newColor) =>
            setColors({ ...colors, top: newColor.target.value })
          }
        />
      </div>
      <div className="logo">
        <span>Designed by </span>
        <a href="https://vi-nguyen.vercel.app/" target="_blank">
          Vi Nguyen
        </a>
      </div>
      <Canvas camera={{ fov: 45, position: [-80, -50, 80] }}>
        <EffectComposer>
          <Bloom intensity={0.5} />
        </EffectComposer>
        <OrbitControls
          maxPolarAngle={Math.PI / 1.8}
          minDistance={3}
          maxDistance={8}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 2, 2]} intensity={1} />
        <Car colors={colors} />
      </Canvas>
    </>
  );
}

export default App;
