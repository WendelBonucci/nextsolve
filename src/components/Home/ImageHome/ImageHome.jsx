"use client";
import * as THREE from "three"; // Biblioteca 3D
import { Suspense, useEffect, useRef, useState } from "react"; // Hooks do React
import { Canvas, useFrame, useLoader } from "@react-three/fiber"; // React Three Fiber - React + Three.js
import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei"; // Helpers úteis
import { useInView } from "react-intersection-observer";
import styles from "./ImageHome.module.css";

function Model({ startY = 5, targetY = 1, resetAnimation }) {
  // Carrega imagem de fundo para a tela do Mac
  const texture = useLoader(THREE.TextureLoader, "/images/backgroundPc.jpg");
  texture.flipY = false; // Corrige orientação da textura

  const group = useRef(); // Referência para manipular o grupo 3D
  const { nodes, materials } = useGLTF("/mac-draco.glb"); // Carrega o modelo 3D do MacBook (.glb file)
  const [entered, setEntered] = useState(false); // Estado para controlar se o notebook já "entrou" na tela
  const [opacity, setOpacity] = useState(0); //inicialmente invisivel

  useEffect(() => {
    if (resetAnimation) {
      setEntered(false);
      if (group.current) {
        setOpacity(0);
        group.current.position.y = startY;
      }
    }
  }, [resetAnimation, startY]);

  // animação de flutuar
  useFrame((state) => {
    // useFrame é uma função que roda a cada “frame” da animação, como um filme.
    const t = state.clock.getElapsedTime(); // é o tempo decorrido, usado para calcular movimentos contínuos.

    // animação de entrada do notebook
    if (!entered) {
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        targetY,
        0.06,
      ); //0.05 -> Velocidade da interpolação
      if (Math.abs(group.current.position.y - targetY) < 0.01) {
        setEntered(true);
      }
    }

    setOpacity((prev) => THREE.MathUtils.lerp(prev, 1, 0.05));

    // animação de flutuar
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.5,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 10,
      0.1,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1,
    );
    group.current.position.y += Math.sin(t / 2) * 0.002; // flutuar para cima ou pra baixo

    group.current.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.transparent = true;
        child.material.opacity = opacity;
      }
    });
  });

  return (
    <group ref={group} position={[0, startY, 0]} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            <meshBasicMaterial map={texture} />
            <Html
              className="content"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div
                className="wrapper"
                style={{ width: "100%", height: "100%" }}
                onPointerDown={(e) => e.stopPropagation()}
              >
                {/*<ContentPc />*/}
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

export default function ImageHome() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const [scale, setScale] = useState([1, 1, 0.9]);
  const [cameraPos, setCameraPos] = useState([-5, 0, -15]);
  const [positionGroup, setPositionGroup] = useState([3, -1, 0])
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    setIsMobile(window.innerWidth < 768);

    function handleResize() {
      console.log("EXECUTANDO handleResize com o novo código!"); 
      const width = window.innerWidth;
      console.log(width); 
      if (width < 400){
        setScale([0.5, 0.5, 0.4]);
        setCameraPos([-5, 0, -10]);
        setPositionGroup([0,-1,0])
      }
      else if (width < 520){
        setScale([0.5, 0.5, 0.4]);
        setCameraPos([-5, 0, -9]);
        setPositionGroup([0,-1,0])
      }
      else if (width < 768) {
        setScale([0.6, 0.6, 0.5]);
        setCameraPos([-5, 0, -10]);
        setPositionGroup([0,-1,0])
      }
       else if (width < 1024) {
        // tablets
        setScale([0.8, 0.8, 0.7]);
        setCameraPos([-4.5, 0, -13]);
        setPositionGroup([0,-1,0])
      } else {
        // desktops
        setScale([1, 1, 0.9]);
        setCameraPos([-5, 0, -15]);
        setPositionGroup([0,-1,0])
      }
    }

    handleResize(); // chama no carregamento inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.ImageHome} ref={ref}>
      <Canvas camera={{ position: cameraPos, fov: 55 }}>
        {/*position → posição da câmera no espaço 3D (x, y, z).| fov: 50 → campo de visão da câmera,. */}
        <pointLight position={[10, 10, 10]} intensity={8.5} />
        {/*pointLight é como uma lâmpada que ilumina tudo ao redor. position é onde a lâmpada está. intensity é quão forte é a luz.*/}
        <Suspense fallback={null}>
          <group
            rotation={isMobile ? [12.3, 3.45, 0] : [0, 12.2, 0]}
            position={positionGroup}
            scale={scale}
          >
            <Model resetAnimation={inView} />
          </group>
          <Environment files="/hdri/potsdamer_platz_1k.hdr" />
        </Suspense>
        <ContactShadows
          position={[0, -3, 0]}
          scale={20}
          blur={3}
          far={6.5}
          color="#14cddd"
        />
        {!isMobile && (
          <OrbitControls /*permite girar o notebook com o mouse. */
            enablePan={false} /*não permite arrastar o notebook. */
            enableZoom={false} /*não permite dar zoom. */
            minPolarAngle={Math.PI / 2.9}   // Limite inferior 
            maxPolarAngle={Math.PI / 2.7} // Limite superior
            minAzimuthAngle={0} // Limite esquerdo 
            maxAzimuthAngle={0}  // Limite direito 
          />
        )}
      </Canvas>
    </section>
  );
}
