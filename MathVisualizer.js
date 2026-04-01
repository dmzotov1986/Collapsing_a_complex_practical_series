a = 2
b = 7
c = c0 = 1050
d = []
e = []
s_e = 0
for (i = 0; i < b - a + 1; ++i) {
	c -= d[i] = c * a / (b - i)
	s_e += e[b - a - i] = i == 0 ? 1 : (i + a - 1) / i * e[b - a - i + 1]
}
for (i = 0; i < b - a + 1; ++i) {
	e[i] *= c0 / s_e
}
document.write("<var>a</var>: ", a, "<br><var>b</var>: ", b, "<br><var>i</var>: ", 0, "..", i - 1, "<br><var>c0</var>: ", c0, "<br><var>d</var>: ", d, "<br><var>e</var>: ", e, "<br><var>s_e</var>: ", s_e, "<br>")