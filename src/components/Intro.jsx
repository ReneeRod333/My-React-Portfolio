import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Renee Rodriguez</h1>
            <div class="avatar">
                <img src="./assets/avatar.jpg"
                    alt="black and white avatar image as charcoal drawing" />
            </div>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                As a software developer, I bring a unique blend of technical expertise and a passion for creativity. I
                believe that art and technology are not mutually exclusive; instead, they can complement each other
                beautifully. My love for art fuels my creativity in coding, inspiring me to find innovative solutions to
                complex problems. I strive to create software that not only functions flawlessly but also delights users
                with its aesthetic appeal. When I'm not coding, you can find me exploring art galleries, sketching, or
                experimenting with new creative projects.
                <a
                    href="https://youtube.com/fknight"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                >
                </a>
                
            </p>
        </div>
    )
}

export default Intro;