import { useEffect } from 'react';
import { Section } from '../../Layout/Section';
import { Project } from '../../Project';
import { SectionTitle } from '../../Text/SectionTitle';
import styles from './Projects.module.css';
import axios from 'axios';

export const Projects = ({ limited }) => {
    const projects = [
        {
            title: 'Simple Page',
            src: '',
            description:
                'Uma simples página construída com HTML/CSS, no curso de "Front do Zero" da Alura.',
            repo: 'https://github.com/oricardos/front-do-zero',
            demo: 'https://oricardos-simple-page.netlify.app/',
            tecs: ['html, css'],
            reverse: false,
        },
        {
            title: 'Django Forms',
            src: '',
            description: 'Projeto criado para estudo de Django forms.',
            repo: 'https://github.com/oricardos/django-forms',
            demo: '',
            tecs: ['django, jinja'],
            reverse: true,
        },
        {
            title: 'Space',
            src: '',
            description: 'Projeto criado para estudo de Django.',
            repo: 'https://github.com/oricardos/space',
            demo: '',
            tecs: ['django, jinja'],
            reverse: false,
        },
        {
            title: 'git-commands',
            src: '',
            description: 'Projeto criado para auxiliar iniciantes a usar git.',
            repo: 'https://github.com/oricardos/git-commands',
            demo: 'https://oricardos.github.io/git-commands/',
            tecs: ['html, css, git'],
            reverse: true,
        },
        {
            title: 'Studies',
            src: '',
            description: '',
            repo: 'https://github.com/oricardos/studies',
            demo: 'https://studiests.netlify.app/',
            tecs: ['react, typescrip'],
            reverse: false,
        },
        {
            title: 'Ecoleta',
            src: 'https://raw.githubusercontent.com/oricardos/Next-Level-Week/master/ecoleta.png',
            description:
                'Projeto realizado na Next level week da Rocketseat. O projeto Ecoleta visa o cadastro de empresas que fazem a coleta de produtos para reciclagem.',
            repo: 'https://github.com/oricardos/studies',
            demo: 'https://studiests.netlify.app/',
            tecs: ['react, typescrip'],
            reverse: true,
        },
        {
            title: 'PraiseApp',
            src: '',
            description: 'Projeto criado para estudo de Django.',
            repo: 'https://github.com/oricardos/praise_app',
            demo: '',
            tecs: ['django, jinja'],
            reverse: false,
        },
        {
            title: 'Animais fantásticos',
            src: '',
            description:
                'Site criado para aprofundar conhecimentos em JavaScript.',
            repo: 'https://github.com/oricardos/praise_app',
            demo: '',
            tecs: ['django, jinja'],
            reverse: true,
        },
        {
            title: 'Desafio Onidevs',
            src: '',
            description:
                'CRUD criado com Python + Django para o Desafio Onidevs da Onimusic.',
            repo: 'https://github.com/oricardos/Desafio-Onidevs',
            demo: '',
            tecs: ['django, jinja'],
            reverse: false,
        },
        {
            title: 'Twitch App - Clone',
            src: '',
            description: 'Clone do aplicativo mobile da Twitch',
            repo: 'https://github.com/oricardos/Twitch-App-clone',
            demo: '',
            tecs: ['react-native'],
            reverse: true,
        },
        {
            title: 'Twitter - Clone',
            src: '',
            description: 'Clone da página inicial do Twitter',
            repo: 'https://github.com/oricardos/twitter-clone',
            demo: '',
            tecs: ['django, jinja'],
            reverse: false,
        },
        {
            title: 'Shades - Clone',
            src: '',
            description: 'Criação da Landing Page de um produto.',
            repo: 'https://github.com/oricardos/shades-clone',
            demo: '',
            tecs: ['django, jinja'],
            reverse: true,
        },
        {
            title: 'Keyboard JS',
            src: '',
            description: 'Clone da página inicial do Twitter',
            repo: 'https://github.com/oricardos/keyboard-with-js',
            demo: '',
            tecs: ['django, jinja'],
            reverse: false,
        },
    ];

    const firstThreeProjects = projects.slice(0, 3);

    const getRepositories = async () => {
        const username = 'oricardos';
        const perPage = 100; // Número máximo de repositórios por página
        let page = 1; // Página inicial
        try {
            const response = await axios.get(
                `https://api.github.com/users/${username}/repos`,
                {
                    params: {
                        per_page: perPage,
                        page: page,
                    },
                }
            );

            const repositories = response.data;
            console.log(repositories);

            // Verifique se há mais páginas de resultados
            if (repositories.length === perPage) {
                page++;
                await getRepositories(); // Recursivamente chama a função para a próxima página
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // getRepositories();
    }, []);

    return (
        <Section bg>
            <div className={styles.wrapper}>
                <SectionTitle title="Projetos" />

                {limited ? (
                    <>
                        {firstThreeProjects.map((project, index) => (
                            <Project
                                key={index}
                                src={project.src}
                                title={project.title}
                                description={project.description}
                                repo={project.repo}
                                demo={project.demo}
                                reverse={project.reverse}
                            />
                        ))}

                        {projects.length > 3 ? (
                            <a href="/">Ver todos os projetos</a>
                        ) : null}
                    </>
                ) : (
                    <>
                        {projects.map((project, index) => (
                            <Project
                                key={index}
                                src={project.src}
                                title={project.title}
                                description={project.description}
                                repo={project.repo}
                                demo={project.demo}
                                reverse={project.reverse}
                            />
                        ))}
                    </>
                )}
            </div>
        </Section>
    );
};
