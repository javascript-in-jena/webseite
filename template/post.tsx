/*!
 * @license MIT
 */

import * as React from 'react';

import { AssetEntity, PostEntity } from '@datenknoten/ts-ssg';
import * as moment from 'moment';

interface Props {
    post: PostEntity;
}

/**
 * Post component
 */
export class Post extends React.Component<Props, {}> {

    public constructor(props: Props) {
        super(props);
    }

    /**
     * Render method
     */
    public render() {

        return <article>
            <h2>{this.props.post.metadata.title}</h2>
            <hr />
            {this.props.post.html}
        </article>;
    }
}
