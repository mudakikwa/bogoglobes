import React,{useEffect} from 'react'
import "./index.scss"
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import ThreeGlobe from 'three-globe';

export default function SphereGl() {
    useEffect(() => {
        /**
         * Data
         */
        const N = 10;
        const gData = [...Array(N).keys()].map(() => ({
            lat: (Math.random() - 0.5) * 180,
            lng: (Math.random() - 0.5) * 360,
            maxR: Math.random() * 20 + 3,
            propagationSpeed: (Math.random() - 0.5) * 20 + 1,
            repeatPeriod: Math.random() * 2000 + 200
        }));
        // Canvas
        let counter = 1.0
        const canvas = document.querySelector('canvas#spheregl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Sizes
         */
        const sizes = {
            width: canvas.getBoundingClientRect().width,
            height: canvas.getBoundingClientRect().height
        }
        const handleResize = () => {

            // Update sizes
            sizes.width = canvas.getBoundingClientRect().width
            sizes.height = canvas.getBoundingClientRect().height

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }
        window.removeEventListener('resize', handleResize)
        window.addEventListener('resize', handleResize)

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera()
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        camera.position.z = 321.20777545535566
        scene.add(camera)

        // Controls
        const controls = new TrackballControls(camera, canvas);

        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.noZoom = true;
        controls.noPan = true;
        controls.panSpeed = 0.8;

        controls.keys = ['KeyA', 'KeyS', 'KeyD'];
        controls.enableDamping = true

        /**
         * Globe
         */
        const colorInterpolator = t => `rgba(255,100,50,${1 - t})`;
        const Globe = new ThreeGlobe()
            .globeImageUrl('./textures/earthOrange.png')
            .ringsData(gData)
            .ringColor(() => colorInterpolator)
            .ringMaxRadius('maxR')
            .ringPropagationSpeed('propagationSpeed')
            .ringRepeatPeriod('repeatPeriod')
            .atmosphereColor("#F13E2F")
        scene.add(Globe);
        scene.add(new THREE.AmbientLight(0xffffff));
        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        })
        renderer.setSize(sizes.width, sizes.height)
        // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 0)

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
            // Update controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()

        const cleanScene = () => {
            try {
                const cleanMaterial = material => {
                    material.dispose()

                    // dispose textures
                    for (const key of Object.keys(material)) {
                        const value = material[key]
                        if (value && typeof value === 'object' && 'minFilter' in value) {
                            value.dispose()
                        }
                    }
                }
                let disposeList = []
                scene.traverse((child) => {
                    if (child.isMesh) {
                        disposeList.push({
                            geometry: child.geometry,
                            material: child.material,
                        })
                    }
                });
                disposeList.forEach(o => {
                    o.geometry.dispose()
                    cleanMaterial(o.material)
                });
                disposeList = []
                window.removeEventListener('resize', handleResize)
            }
            catch (e) {
                console.log("error", e)
            }
        }
        return () => {
            cleanScene()
        }
    }, [])
    
  return (
      <canvas id="spheregl"></canvas>
  )
}
