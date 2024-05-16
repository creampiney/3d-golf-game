import React from 'react';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

interface WindProps {
    direction: Vector3; // Wind direction as a Vector3
    speed: number; // Wind speed
}

const Wind: React.FC<WindProps> = ({ direction, speed }) => {
    // Update the wind effect on every frame
    useFrame(({ scene }) => {
        // Access all mesh objects in the scene
        scene.traverse((object) => {
            // Check if the object has a physics body (e.g., useCylinder, useBox, etc.)
            if (object.userData.physics) {
                // Apply wind force to the physics body based on direction and speed
                const windForce = direction.clone().multiplyScalar(speed);
                object.userData.physics.applyForce(windForce.toArray());
            }
        });
    });

    // Empty JSX since this component doesn't render any visible elements
    return null;
};

export default Wind;
