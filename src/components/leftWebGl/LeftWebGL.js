import React, { useEffect } from 'react'
import './style.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LiquidShader } from "./liquidEffect"

export default function LeftWebGL() {
    useEffect(() => {
        /**
         * Base
         */
        // Canvas
        let counter = 1.0
        let liquidMaterial
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Sizes
         */
        const sizes = {
            width: canvas.getBoundingClientRect().width,
            height: canvas.getBoundingClientRect().height
        }

        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = canvas.getBoundingClientRect().width
            sizes.height = canvas.getBoundingClientRect().height

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 1
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        /**
         * Cube
         */
        liquidMaterial = LiquidShader(sizes.width, sizes.height, "#F13E2F", "#F1E4E3")
        console.log(liquidMaterial.uniforms["u_time"].value, counter)
        if (liquidMaterial.uniforms["u_time"]?.value) {
            liquidMaterial.uniforms["u_time"].value = counter;
            liquidMaterial.uniforms["u_resolution"].value = new THREE.Vector2(sizes.width, sizes.height);
        }
        const cube = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            liquidMaterial
        )
        scene.add(cube)

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
         */
        const clock = new THREE.Clock()
        let lastElapsedTime = 0

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - lastElapsedTime
            lastElapsedTime = elapsedTime
            counter += deltaTime
            if (liquidMaterial.uniforms["u_time"]?.value) {
                liquidMaterial.uniforms["u_time"].value = counter;
            }
            // Update controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }, [])

    return (
        <canvas class="webgl"></canvas>
    )
}
