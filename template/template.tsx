/*!
 * @license MIT
 */

import * as React from 'react';

import { AssetEntity, PostEntity } from '@datenknoten/ts-ssg';

import { Post } from './post';
import { Navigation } from './navigation';

/**
 * Export a render function
 */
export function render(post: PostEntity, context: AssetEntity[]) {
    return <html lang="de">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <title>{post.metadata.title} | JavaScript in Jena</title>
            <link rel="stylesheet" href="/assets/styles.css"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script
                src="/assets/turbolinks.js"
                defer></script>
        </head>
        <body>
            <div className="main container">
                <section id="main-navigation" className="navigation">
                    <h1>
                        <a href="/">
                            <img className="logo" src="/assets/logo.svg" />
                            JavaScript in Jena
                        </a>
                    </h1>
                    <p>Treffen von JavaScript Entwicklern in und um Jena</p>
                    <hr />
                    <Navigation menu="main" context={context}></Navigation>
                    <hr />
                    <ul className="social">
                        <li><a href="https://riot.im/app/#/room/#JSinJena:matrix.org">#JSinJena:matrix.org</a></li>
                        <li><a href="https://github.com/javascript-in-jena/">GitHub</a></li>
                        <li><a href="mailto:kontakt@javascript-in-jena.de">Mail</a></li>
                    </ul>
                </section>
                <section className="mobile-menu">
                    <a href="#main-navigation" className="hamburger" data-turbolinks="false">
                    <svg aria-hidden="true" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                    </a>
                    <h1><a href="/">JavaScript in Jena</a></h1>
                    <a href="/" className="logo"><img src="/assets/logo.svg" className="logo" /></a>
                    <hr />
                </section>
                <section className="content">
                    <Post post={post}></Post>
                </section>
            <a href="#main-navigation-toggle" className="backdrop" data-turbolinks="false"></a>
            </div>
        </body>
    </html>;
}
