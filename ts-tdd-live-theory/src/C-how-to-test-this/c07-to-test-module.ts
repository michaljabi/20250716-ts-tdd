import { time } from './c07-time-module'

export function shoutBannerFor(product: string, price: number) {
	return `Welcome, today's (${time()}) promotion is: ${product} for ${price}`;
}
