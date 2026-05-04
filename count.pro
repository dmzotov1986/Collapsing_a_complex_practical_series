:-
	initialization(command_processor).
command_processor:-
	write('Это программа для счёта.'),
	process
;
	write('До свидания!'),
	nl.
process:-
	nl,
	write('Каким числом начинать счёт?: '),
	read_integer(From),
	write('Каким числом заканчивать счёт?: '),
	read_integer(To),
	write_count(From, To),
	process.
write_count(From, To):-
	write('Счёт от '),
	write(From),
	write(' до '),
	write(To),
	write(': '),
	(From < To ->
		I = 1,
		C = (<)
	;
		I = -1,
		C = (>)),
	write_count_elements(From, To, I, C)
;
	write(To),
	write('.').
write_count_elements(From, To, I, C):-
	call(C, From, To),
	write(From),
	write(', '),
	New_from is From + I,
	write_count_elements(New_from, To, I, C).
