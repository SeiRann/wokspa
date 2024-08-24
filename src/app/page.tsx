"use client"
import * as THREE from 'three'
import { Canvas, useLoader, useFrame, ThreeElements } from '@react-three/fiber'
import IngredientMenu from "./client/components/IngredientMenu"
import style from "@/app/styles/homePage.module.scss"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useRef, useEffect } from 'react'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'
import { OrbitControls } from '@react-three/drei'

const Model: React.FC = (props:ThreeElements['mesh']) => {
  const result = useLoader(GLTFLoader, "/models/Chinese.glb")
  

  return (
    <primitive {...props} object={result.scene}/>
  )
}

export default function App() {
  return (
    <div className={style.MainDiv}>
      <div className={style.Wok}>
        <Canvas>
          <ambientLight intensity={0.5} />

          <Model scale={6} />
          <OrbitControls />
        </Canvas>
      </div>
      <IngredientMenu />
    </div>
  )
}
