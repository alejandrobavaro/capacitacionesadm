import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import "../assets/scss/_03-Componentes/_Curso2.scss";

const Curso2 = () => {
  const [imagenes, setImagenes] = useState([]);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [modelo3D, setModelo3D] = useState(null);

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const response = await fetch('/Curso2.json');
        const data = await response.json();
        setImagenes(data.imagenes);
        
        if (data.imagenes && data.imagenes.length > 0) {
          setImagenSeleccionada(data.imagenes[0].caras);
        }
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
      }
    };
    fetchImagenes();
  }, []);

  const cargarTextura = (url) => new THREE.TextureLoader().load(url);

  const cargarModelo = (url) => {
    const loader = new OBJLoader();
    loader.load(url, (obj) => {
      setModelo3D(obj);
    }, undefined, (error) => {
      console.error('Error al cargar el modelo:', error);
    });
  };

  const RotatingBox = () => {
    const cuboRef = React.useRef();

    useFrame(() => {
      if (cuboRef.current) {
        cuboRef.current.rotation.y += 0.005;
      }
    });

    return (
      <mesh ref={cuboRef} castShadow receiveShadow>
        <boxGeometry args={[3, 3, 3]} />
        <meshPhysicalMaterial map={cargarTextura(imagenSeleccionada.frente)} />
        <meshPhysicalMaterial map={cargarTextura(imagenSeleccionada.atras)} />
        <meshPhysicalMaterial map={cargarTextura(imagenSeleccionada.izquierda)} />
        <meshPhysicalMaterial map={cargarTextura(imagenSeleccionada.derecha)} />
        <meshPhysicalMaterial map={cargarTextura(imagenSeleccionada.arriba)} />
        <meshPhysicalMaterial map={cargarTextura(imagenSeleccionada.abajo)} />
      </mesh>
    );
  };

  return (
    <div className="curso2-container">
      <h1 className="curso2-title">Mantenimiento Edilicio - Curso 2</h1>
      <p className="curso2-intro">
        En este curso profundizamos en la importancia de la organización, costos y control en los programas de mantenimiento de edificios. El mantenimiento es una inversión que preserva el valor y la seguridad de las propiedades.
      </p>

      {modelo3D ? (
        <div className="canvas-container">
          <Canvas shadows>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
            <spotLight position={[-5, 5, 10]} angle={0.3} penumbra={0.2} intensity={1} castShadow />
            <primitive object={modelo3D} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      ) : (
        imagenSeleccionada && (
          <div className="canvas-container">
            <Canvas shadows>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
              <spotLight position={[-5, 5, 10]} angle={0.3} penumbra={0.2} intensity={1} castShadow />
              <RotatingBox />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        )
      )}

      <div className="image-selector">
        <h3>Selecciona una visualización:</h3>
        {imagenes.map((imagen) => (
          <button
            key={imagen.id}
            onClick={() => {
              setImagenSeleccionada(imagen.caras);
              cargarModelo(imagen.modelo);
            }}
            className={`image-button ${imagenSeleccionada === imagen.caras ? 'selected' : ''}`}
          >
            {imagen.nombre}
          </button>
        ))}
      </div>

      <div className="curso2-contenido">
        <h2>Organización y Control del Mantenimiento</h2>
        <p>
          El administrador debe planificar adecuadamente los recursos humanos, técnicos y materiales para asegurar un mantenimiento eficiente y rentable.
          Los costos incluyen: análisis y ejecución del programa, realización técnico-administrativa y control de las tareas.
        </p>
        <p>
          Una correcta implementación y control permite reducir imprevistos costosos y preservar la seguridad edilicia.
        </p>
        <h3>Ejercicios de Aplicación</h3>
        <ul>
          <li>¿Cómo se clasifica el mantenimiento?</li>
          <li>Explique la diferencia entre trabajo de reparación y de mantenimiento.</li>
          <li>Enuncie una de las premisas en un plan de mantenimiento.</li>
          <li>¿Cuáles son los distintos costos que intervienen en un plan de mantenimiento?</li>
          <li>¿Por qué es importante la historia de un edificio?</li>
          <li>Describa los pasos necesarios para implementar un programa de mantenimiento.</li>
        </ul>
      </div>
    </div>
  );
};

export default Curso2;
