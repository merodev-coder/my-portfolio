import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../componants/HackerRoom"
import CanvasLoader from "../componants/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constans/index.js"
import ReactLogo from "../componants/ReactLogo.jsx"
import Target from "../componants/target.jsx"
import Cube from "../componants/Cube.jsx"
import Rings from "../componants/Rings.jsx"
import HeroCamera from "../componants/HeroCamera.jsx"
import Button from "../componants/button.jsx"


const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

    const size = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Ammar <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">UI/UX
                    & Front-EndDeveloper.</p>
            </div>


            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={size.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={size.deskScale}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={size.targetPosition} />
                            <ReactLogo position={size.reactLogoPosition} />
                            <Cube position={size.cubePosition} />
                            <Rings position={size.ringPosition} />

                        </group>


                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>

                </Canvas>
            </div>


            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}


export default Hero