"""Func"""

def func():
    """BusStop I"""
    capacity = int(input())
    bus, counter = [], 0
    for _ in range(int(input())):
        detail = input()
        number, peopletarget = detail.split()[0], detail.split()[1:]
        peopletarget = list(filter(lambda i: int(i) > int(number), peopletarget))
        print("This people", peopletarget)

        for _ in range(bus.count(number)):
            bus.remove(number)
            counter += 1
        bus += peopletarget
        bus = bus[0: capacity]
        print("This is bus ->", bus)
        print("Left ->", counter)
    print(counter)
func()
