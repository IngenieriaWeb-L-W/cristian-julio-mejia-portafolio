// Proyectos.tsx
import React from "react"
import Project from "./projectcard"

const Proyectos = () => {
  const proyectos = [
    {
      src: "/AI.png",
      title: "Introducción IA",
      description: "Data analytics project where you work with a telecommunications database",
      texto: "Saber Má",
      githubLink: "https://github.com/Camilo899/IntroduccionIA",
    },
    {
      src: "/dl.png",
      title: "Introducción Deep Learnig",
      description: "In this project, deep learning techniques are applied to five different types of flowers.",
      texto: "Saber Má",
      githubLink: "https://github.com/Camilo899/FundamenteoDeepLearnig",
    },
    {
      src: "/An.png",
      title: "Hero Front-End",
      description: "API that performs a basic CRUD for a given group of heroes",
      texto: "Saber Más",
      githubLink: "https://github.com/Proyecto-Integrador-1-2022/Heroes",
    },
    {
      src: "/java.png",
      title: "Hero Back-End",
      description: "Connected Api Front-End with the Back-End, for the consumption of the application",
      texto: "Saber Más ",
      githubLink: " https://github.com/Proyecto-Integrador-1-2022/Backend.git",
    },
    
  ]

  return (
    <section className="p-5">
      <h1 className="mb-4 text-center text-2xl font-bold">Portafolio</h1>
      <div className="flex flex-row gap-4 overflow-x-scroll p-4">
        {proyectos.map((project, maincomponent) => (
          <Project key={maincomponent} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Proyectos