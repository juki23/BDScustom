import React from 'react';
import Project from './../Custom/Project';
import Home from './../Custom/Home/Home';
import Contact from './../Custom/Contact';
import News from './../Custom/News';
import ProjectItem from './../Custom/ProjectItem';
import NewsItem from './../Custom/NewsItem';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/project",
        exact: true,
        main: () => <Project />
    },
    {
        path: "/project/:id",
        exact: true,
        main: ({match}) => <Project match={match} />
    },
    {
        path: "/contact",
        exact: false,
        main: () => <Contact />
    },
    {
        path: "/news",
        exact: false,
        main: () => <News />
    },
    {
        path: "/project/item/:id",
        exact: false,
        main: ({match}) => <ProjectItem match={match} />
    },
    {
        path: "/newsitem/:id",
        exact: false,
        main: ({match}) => <NewsItem match={match} />
    }
]

export default routes;