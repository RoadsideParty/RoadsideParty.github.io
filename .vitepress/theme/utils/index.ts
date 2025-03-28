import Big from "big.js"

// 除法
export function division(num1: number, num2: number, points = 2) {
	if (!num1 || !num2) return new Big(0)
	const x = new Big(num1)
	return x.div(num2).round(points)
}
