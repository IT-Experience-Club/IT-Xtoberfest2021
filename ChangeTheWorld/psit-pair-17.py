"""Func"""

def func(paramnumber):
    """Composite functon"""
    print("%.2f" %func1(func2(paramnumber)) + "\n" + "%.2f" %func2(func1(paramnumber)))

def func1(number):
    """Func1"""
    return number * 2

def func2(number):
    """Func2"""
    return number/2 + 1

func(int(input()))
