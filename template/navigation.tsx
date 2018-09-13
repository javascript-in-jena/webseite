/*!
 * @license MIT
 */

import * as React from 'react';

import { AssetEntity, PostEntity } from '@datenknoten/ts-ssg';

interface Props {
    context: AssetEntity[];
    menu: string;
}

/**
 * Post component
 */
export class Navigation extends React.Component<Props, {}> {
    private menuItems: PostEntity[] = [];

    public constructor(props: Props) {
        super(props);
        if (props.menu.length === 0) {
            throw new Error('Invalid Menu');
        }

        for (const item of props.context) {
            if (item instanceof PostEntity && Array.isArray(item.metadata.menu) && item.metadata.menu.includes(props.menu)) {
                this.menuItems.push(item);
            }
        }

        this.menuItems = this.menuItems.sort((a: PostEntity, b: PostEntity) => {
            return b.metadata.weight - a.metadata.weight;
        });
    }

    /**
     * Render method
     */
    public render() {
        const items = this.menuItems.map(item => {
            return <li>
                <a href={this.generateLink(item.relativPath)}>{item.metadata.title}</a>
            </li>
        })

        return <nav>
            {items}
        </nav>;
    }

    private generateLink(link: string) {
        return `/${link.replace(/\.md$/, '.html').replace(/index\.html$/, '')}`;
    }
}
