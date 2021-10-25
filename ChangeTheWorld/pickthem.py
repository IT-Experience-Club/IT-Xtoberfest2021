"""Func"""

def func():
    """Pick them"""
    mylist = [int(i) for i in input().replace("[", "").replace("]", "").split(", ")]
    unlock = False
    for i in mylist:
        if i%2 == 0:
            unlock = True
    if not unlock:
        print("Nope")
        return
    for i in mylist:
        if i%2 == 0:
            print(i)
func()
