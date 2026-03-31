a = 5
b = 15
c = c0 = 3003
d = []
e = []
s_e = 0
for (i = 0; i < b - a + 1; ++i) {
	d[i] = c * a / (b - i)
	c -= d[i]
	s_e += e[b - a - i] = i == 0 ? 1 : (i + a - 1) / i * e[b - a - i + 1]
}
for (i = 0; i < b - a + 1; ++i) {
	e[i] *= c0 / s_e
}
document.write("a: ", a, "<br>b: ", b, "<br>i: ", 0, "..", i - 1, "<br>c0: ", c0, "<br>d: ", d, "<br>e: ", e, "<br>s_e: ", s_e, "<br>")