import Big from "big.js"

// 除法
export function division(num1: number, num2: number, points = 2) {
	if (!num1 || !num2) return new Big(0)
	const x = new Big(num1)
	const y = new Big(num2)
	return x.div(y).round(points)
}
