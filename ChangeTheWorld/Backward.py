"""Func"""

def func():
    """Backward"""
    stacker = []
    while True:
        word = input()
        if word == "NULL":
            break
        stacker.append(word)
    stacker.reverse()
    for i in stacker:
        print(i)
func()
