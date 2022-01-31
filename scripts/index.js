import * as THREE from 'https://cdn.skypack.dev/three';

document.addEventListener("DOMContentLoaded", () => {
    canvas.style.opacity = 1;
});

// Texture Loader
const loader = new THREE.TextureLoader()
const blinky = loader.load('./images/blinky.png')

// Canvas
const canvas = document.getElementById("canvas");

// Scene
const scene = new THREE.Scene()

// Objects or Geometry
// const geometry = new THREE.SphereGeometry(15, 32, 16);/
const particlessGeometry = new THREE.BufferGeometry;
const particlesCnt = 5000;

const posArray = new Float32Array(particlesCnt * 3)

for (let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5

}

particlessGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

// Materials
const material = new THREE.PointsMaterial({ size: 0.005, map: blinky, transparent: true, color: 'white' })

// Mesh
// const sphere = new THREE.Points(geometry, material)
const particlesMesh = new THREE.Points(particlessGeometry, material)
scene.add(particlesMesh)

// Add
// scene.add(sphere)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

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
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime
    particlesMesh.rotation.y = .1 * (elapsedTime)
    particlesMesh.position.x = .3 * (elapsedTime)


    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
