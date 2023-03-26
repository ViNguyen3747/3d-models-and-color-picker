import { useGLTF, Center } from "@react-three/drei";

export default ({ colors }) => {
  const { nodes } = useGLTF("./car.glb");
  return (
    <Center scale={0.4} position={[0, -1, 0]} rotation={[0, Math.PI / 3, 0]}>
      <mesh
        geometry={nodes.light1.geometry}
        material={nodes.light1.material}
        material-emissive="#29bf12"
        material-emissiveIntensity={9}
        toneMapped={false}
      />
      <mesh
        geometry={nodes.light2.geometry}
        material={nodes.light2.material}
        material-emissiveIntensity={4}
        toneMapped={false}
      />
      <mesh geometry={nodes.color1.geometry}>
        <meshStandardMaterial color={colors.color1} />
      </mesh>
      <mesh geometry={nodes.color2.geometry}>
        <meshStandardMaterial color={colors.color2} />
      </mesh>
      <mesh geometry={nodes.color3.geometry}>
        <meshStandardMaterial color={colors.color3} />
      </mesh>
      <mesh geometry={nodes.black.geometry}>
        <meshStandardMaterial color={colors.color4} />
      </mesh>
      <mesh geometry={nodes.window.geometry}>
        <meshStandardMaterial color={"#000000"} />
      </mesh>
      <mesh geometry={nodes.tire10.geometry}>
        <meshStandardMaterial color={"#000000"} />
      </mesh>
      <mesh geometry={nodes.tire11.geometry}>
        <meshStandardMaterial color={colors.tire} />
      </mesh>
      <mesh geometry={nodes.tire20.geometry}>
        <meshStandardMaterial color={"#000000"} />
      </mesh>
      <mesh geometry={nodes.tire21.geometry}>
        <meshStandardMaterial color={colors.tire} />
      </mesh>
      <mesh geometry={nodes.tire30.geometry}>
        <meshStandardMaterial color={"#000000"} />
      </mesh>
      <mesh geometry={nodes.tire31.geometry}>
        <meshStandardMaterial color={colors.tire} />
      </mesh>
      <mesh geometry={nodes.tire40.geometry}>
        <meshStandardMaterial color={"#000000"} />
      </mesh>
      <mesh geometry={nodes.tire41.geometry}>
        <meshStandardMaterial color={colors.tire} />
      </mesh>
      <mesh geometry={nodes.tire50.geometry}>
        <meshStandardMaterial color={"#000000"} />
      </mesh>
      <mesh geometry={nodes.tire51.geometry}>
        <meshStandardMaterial color={colors.tire} />
      </mesh>
      <mesh geometry={nodes.crater1.geometry}>
        <meshStandardMaterial color={colors.crater1} />
      </mesh>
      <mesh geometry={nodes.crater2.geometry}>
        <meshStandardMaterial color={colors.tire} />
      </mesh>
      <mesh geometry={nodes.top.geometry}>
        <meshStandardMaterial color={colors.top} />
      </mesh>
    </Center>
  );
};
