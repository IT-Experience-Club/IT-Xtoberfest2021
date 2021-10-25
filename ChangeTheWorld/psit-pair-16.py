"""Func"""

def func():
    """BMI"""
    for _ in range(5):
        name = input()
        weight = float(input())
        height = float(input())
        bmifind(name, weight, height)

def bmifind(name, weight, height):
    """BMI find"""
    print(name+"'s  BMI = %.2f" %(weight/(height/100)**2))

func()
