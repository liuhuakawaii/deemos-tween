import type { EnrichedTweet } from '../utils.js';
import type { TwitterComponents } from './types.js';
type Props = {
    tweet: EnrichedTweet;
    components?: TwitterComponents;
};
export declare const TweetHeader: ({ tweet, components }: Props) => import("react").JSX.Element;
export {};
