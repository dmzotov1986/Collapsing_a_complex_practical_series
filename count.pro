/*write_count(From, To):- write('Счет от '), write(From), write(' до '), write(To), write(': '), From < To, Last is To - 1, write_count_element(From, Last); write(To), write('.').
write_count_element(From, To):- write(From), write(', '), From < To, New_from is From + 1, write_count_element(New_from, To).
:- initialization(write_count(1, 1)).*/
write_count(From, To):- write('Счет от '), write(From), write(' до '), write(To), write(': '), (From > To -> I = 1, C =.. [>, _, _]; I = -1, C =.. [<, _, _]), Last is To + I, write_count_element(From, Last, I, C); write(To), write('.').
write_count_element(From, To, I, C):- write(From), write(', '), get_char(_), write_canonical(C), call(C, From, To), New_from is From - I, write_count_element(New_from, To, I, C).
:- initialization(write_count(10, 1)).
