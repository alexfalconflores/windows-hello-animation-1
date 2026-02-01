import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export function setupHelloAnimation(element) {
  const mainCtr = element;

  const eyeLeft = mainCtr.querySelector("#eye-left");
  const eyeRight = mainCtr.querySelector("#eye-right");
  const eyeToLeft = mainCtr.querySelector("#eye-to-left");
  const eyeToRight = mainCtr.querySelector("#eye-to-right");
  const wink = mainCtr.querySelector("#wink"); // ojo: en tu SVG actual no existe #wink
  const smileUp = mainCtr.querySelector("#smile-up");
  const smileDown = mainCtr.querySelector("#smile-down");
  const smile = mainCtr.querySelector("#smile");

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.3,
    delay: 0.3,
  });

  gsap.set(mainCtr, { opacity: 0 });

  tl.to(mainCtr, {
    duration: 0.3,
    opacity: 1,
  })
    .to(smileDown, {
      duration: 0.3,
      morphSVG: "#smile-up",
    })
    .to(smile, {
      duration: 0.3,
      rotation: -30,
      transformOrigin: "center center",
      ease: "circ.out",
    })
    .to(smile, {
      duration: 0.9,
      rotation: 900,
      transformOrigin: "center center",
      ease: "circ.inOut",
    })
    .to(
      eyeLeft,
      {
        duration: 0.3,
        morphSVG: "#eye-to-left",
        ease: "power2.out",
      },
      "-=0.3",
    )
    .to(
      eyeRight,
      {
        duration: 0.3,
        morphSVG: "#eye-to-right",
        ease: "power2.out",
      },
      "-=0.3",
    )
    .to(eyeRight, {
      duration: 0.1,
      scaleY: 0.25,
      scaleX: 1.5,
      transformOrigin: "center center",
    })
    .to(eyeRight, {
      duration: 0.1,
      scale: 1,
    })
    .to(mainCtr, {
      duration: 0.6,
      delay: 1,
      opacity: 0,
    });
}
