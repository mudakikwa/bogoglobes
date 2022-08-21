import * as THREE from "three"

export const LiquidShader = (width,height,color,background)=>{
    return new THREE.ShaderMaterial({
        uniforms: {
            u_time: { value: 1.0 },
            u_resolution: { value: new THREE.Vector2(width, height) },
            colorB: { value: new THREE.Color(color) },
            colorA: { value: new THREE.Color(background) },
        },
        vertexShader: `
 varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix 
      * modelViewMatrix 
      * vec4( position, 1.0 );
  }`,
        fragmentShader: `
     #ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 colorA;
uniform vec3 colorB;
varying vec2 vUv;
void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv =  vUv;
    
    vec2 p = uv - vec2(0.5, 0.5); 

    // Time varying pixel color
    vec3 col = vec3(1.0, 1.0, 1.0);
   
    float c = 0.2 + 0.1 * cos((uv.y - uv.x) - tan(uv.x - 0.5) * 20.0 * 0.5 * 2.0) + u_time;
    
    //Color
    vec3 f = cos(vec3(1.0, 1.0, 1.0));
    
    
    //Ball motion
    c -= sin(uv.x) * 2.0 / cos(uv.y) * atan(uv.x - uv.y) - floor(uv.y);
    
    col *= smoothstep(0.1, 0.1, length(p * sin(c))) * smoothstep(0.2, 0.7, f);
    col=mix(colorB,colorA,col);
    // Output to screen
    gl_FragColor = vec4(col,1.0);
}   
    `
    })

}


