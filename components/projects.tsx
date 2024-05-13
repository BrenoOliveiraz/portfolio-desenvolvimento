import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

import Project from './project-map'

export default function Projects() {
    return (
        <section className='scroll-mt-28' id='projects'>

            <SectionHeading>My projects</SectionHeading>
            {/* importando as informações do data.ts para ser renderizado em um novo component atraves de uma função*/}
            <div>

                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>

                            <Project {...project} />

                        </React.Fragment >
                    ))
                }

            </div>

        </section>
    )
}

// criando a função que retornará um novo componente acima dentro do map
