import type { Tweet } from './types/index.js';
export declare class TwitterApiError extends Error {
    status: number;
    data: any;
    constructor({ message, status, data, }: {
        message: string;
        status: number;
        data: any;
    });
}
/**
 * Fetches a tweet from the Twitter syndication API.
 */
export declare function fetchTweet(id: string, fetchOptions?: RequestInit): Promise<{
    data?: Tweet;
    tombstone?: true;
    notFound?: true;
}>;
