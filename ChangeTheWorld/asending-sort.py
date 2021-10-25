"""Func"""

def func():
    """Ascending sort"""
    numbers = []
    for _ in range(5):
        numbers.append(int(input()))
    numbers.sort()
    for i in numbers:
        print(i)
func()
