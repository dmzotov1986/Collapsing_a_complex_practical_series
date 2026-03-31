a = 3
b = 7
c = [1050]
x = []
d = []
e = []
s_e = 0
for(i = 0; i < b - a + 1; ++i) {
	x[i] = a / (b - i)
	d[i] = c[i] * x[i]
	c[i + 1] = c[i] - d[i]
	s_e += e[b - a - i] = i == 0? 1: (i + a - 1) / i * e[b - a - i + 1]
}
for(i = 0; i < b - a + 1; ++i) {
	e[i] *= c[0] / s_e
}
document.write("a: ", a, "<br>b: ", b, "<br>i: ", 0, "..", i - 1, "<br>c: ", c, "<br>x: ", x, "<br>d: ", d, "<br>e: ", e)