import { Text3D, Billboard, Center, Float } from "@react-three/drei";
import * as THREE from "three";

export const BannerText = ({radius}) => {

  return (
    <>
      <Float rotationIntensity={0} floatingRange={[-0.1, 0.1]} speed={8}>
        <Billboard>
          <Center rotation={[0.1, 0, 0]} position={[0, 3.6, -radius]}>
            <Text3D
              height={0.3}
              lineHeight={0.6}
              letterSpacing={-0.06}
              size={1}
              font="/font/Inter_Bold.json"
            >
              {`FANRUAN SUMMIT\n HONK KONG 2024`}
              <meshBasicMaterial color="#14248b" />
            </Text3D>
          </Center>
          <Center rotation={[0, 0, 0]} position={[0, 1.6, -radius]}>
            <Text3D
              height={0.05}
              letterSpacing={0.06}
              size={0.5}
              font="/font/Inter_Bold.json"
            >
              {`Transform Data into Value`}
              <meshBasicMaterial color="#14248b" />
            </Text3D>
          </Center>
          <Center rotation={[0, 0, 0]} position={[0, 0.8, -radius]}>
            <Text3D
              height={0.1}
              letterSpacing={0.06}
              size={0.35}
              font="/font/Inter_Bold.json"
            >
              {`OCTOBER 17 | CORDIS HONG KONG`}
              <meshBasicMaterial color="#14248b" />
            </Text3D>
          </Center>
        </Billboard>
      </Float>
    </>
  )
}