"""Func"""

def func():
    """Muddled Menu"""
    totalmenu = []
    while True:
        menu = input()
        if menu == "DONE":
            break
        elif menu == "CLOSED":
            print("Full Course: [] Reversed: []")
            return
        elif menu == "SOMETHING'S WRONG":
            totalmenu = []
            continue
        elif menu.startswith("Can't do:"):
            totalmenu.remove(menu.replace("Can't do: ", ""))
            continue

        menu = menu.split(" #")
        if menu[1].isdecimal():
            totalmenu.insert(int(menu[1])-1, menu[0])
        else:
            totalmenu.append(menu[0])
    print("Full Course:", totalmenu, "Reversed:", totalmenu[::-1])
func()
