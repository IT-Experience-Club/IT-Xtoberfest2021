"""Func"""

def func():
    """Missing Number"""
    seq = int(input())
    numbers = list(range(1, seq+1))
    while True:
        toremove = input()
        if toremove == "0":
            break
        numbers.remove(int(toremove))
    numbers.sort()
    for i in numbers:
        print(i)
func()
