"""Func"""

def func():
    """PickThemAgain"""
    numbers = [int(i) for i in input().split()]
    numbers.reverse()
    answer = []
    for i in numbers:
        if i%3 == 0 or i%5 == 0:
            answer.append(i)
    if len(answer) == 0:
        print("Nope")
    else:
        for i in answer:
            print(i)
func()
