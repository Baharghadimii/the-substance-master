import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "RC Recruiting",
      image: "/rc.png",
      aspect: 1.51,
      text: `RC Recruiting is a web application
      developed to help companies connect
      to the best talent in North America.`
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Nirvana",
      image: "/nirvana.png",
      aspect: 1.5,
      text: `Nirvana is a single page application (SPA)
      which helps you get track of
      all crypto-currency market in many crypto exchanges. It gives you live data with analysis by experienced and professional crypto traders.`
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Jungle",
      image: "/jungle.png",
      aspect: 1.5037,
      text: `Jungle is a mini e-commerce application
      built with Rails 4.2 and it is more of a
      simulation of the real world online stores!`
    },
    {
      offset: 4,
      factor: 2.25,
      header: "Scheduler",
      image: "/scheduler.png",
      aspect: 1.5037,
      text: `Interview Scheduler is a single page
      application(SPA) and is built using React. It
      allows users to book and cancel interviews.`
    }
  ],
  stripes: [
    { offset: 0, color: "#572526", height: 13 },
    { offset: 6.3, color: "#572526", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
