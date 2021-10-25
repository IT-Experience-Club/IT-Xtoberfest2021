"""Func"""

def func():
    """Point Sorting"""
    for _ in range(int(input())):
        stacker = []
        answer = []
        for _ in range(int(input())):
            position = input()
            stacker.append({"name": position, "sum":sum(int(i)for i in position.split())})
        for i in range(len(stacker)):
            if i == 0:
                answer.append(stacker[i])
                continue
            if answer[-1]["sum"] == stacker[i]["sum"] and\
                int(stacker[i]["name"].split()[1]) > int(answer[-1]["name"].split()[1]):
                answer.insert(len(answer)-2, stacker[i])
            else:
                answer.append(stacker[i])
        answer = sorted(answer, key=lambda i: i['sum'])
        for i in answer:
            print(i["name"])
func()
