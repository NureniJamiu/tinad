import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";

const Navbar = () => {

//   useGSAP(() => {
//     const navTween = gsap.timeline({
//     scrollTrigger: {
//       trigger: 'nav',
//       start: 'bottom top'
//     }
//     });
    
//     navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
//     backgroundColor: '#00000050',
//     backgroundFilter: 'blur(10px)',
//     duration: 1,
//     ease: 'power1.inOut'
//     });
//  })

  return (
    <nav className="bg-black">
        <div>
            <a href="/" className="flex items-center">
                <img src="/white-logo.png" alt="Tinad Logo" className="h-12 w-auto object-contain" />
            </a>
          <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                      <a href={link.path}>{link.name}</a>
                  </li>
              ))}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar;