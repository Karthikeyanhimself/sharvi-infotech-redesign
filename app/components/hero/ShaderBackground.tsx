'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Fragment Shader: Creates a shifting, nebula-like data stream pattern
const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

varying vec2 vUv;

// Simplex noise function (simplified for brevity)
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    vec2 uv = vUv;
    
    // Subtle mouse interaction
    float mouseDist = distance(uv, uMouse);
    float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.1;

    // Create moving noise layers
    float noise1 = snoise(uv * 3.0 + uTime * 0.1 + mouseInfluence);
    float noise2 = snoise(uv * 6.0 - uTime * 0.15);
    
    // Combine noise for organic movement
    float combinedNoise = (noise1 + noise2) * 0.5;
    
    // Define enterprise colors (deep blues/purples)
    vec3 color1 = vec3(0.05, 0.08, 0.15); // Sap 950ish
    vec3 color2 = vec3(0.23, 0.51, 0.96); // Sap 500ish
    vec3 color3 = vec3(0.54, 0.36, 0.96); // Accent Purple
    
    // Mix colors based on noise pattern
    vec3 finalColor = mix(color1, color2, combinedNoise + 0.2);
    finalColor = mix(finalColor, color3, snoise(uv * 2.0 + uTime * 0.05) * 0.3);
    
    // Darken edges (vignette)
    float vignette = smoothstep(1.2, 0.5, distance(uv, vec2(0.5)));
    
    gl_FragColor = vec4(finalColor * vignette, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const ShaderPlane = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const mouseRef = useRef(new THREE.Vector2(0.5, 0.5));

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uResolution: { value: new THREE.Vector2(1, 1) },
        }),
        []
    );

    useFrame((state) => {
        const { clock, mouse } = state;
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = clock.getElapsedTime();
            // Smooth mouse interpolation
            mouseRef.current.lerp(mouse.addScalar(1).divideScalar(2), 0.1);
            material.uniforms.uMouse.value.copy(mouseRef.current);
        }
    });

    return (
        <mesh ref={meshRef} scale={[10, 10, 1]}> {/* Scale up to cover screen */}
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                transparent={true}
            />
        </mesh>
    );
};

export const ShaderBackground = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ShaderPlane />
            </Canvas>
        </div>
    );
};