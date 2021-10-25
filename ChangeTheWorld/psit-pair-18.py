"""Func"""

def func(numa, numb, numc, numd):
    """Thre function with in"""
    print(ffunc(ffunc(numa)))
    print(gfunc(ffunc(numa - numb)))
    print(hfunc((ffunc(numa + numb)), ffunc(numa + numc), gfunc(ffunc(numd**2))))
    print(ifunc(hfunc(ffunc(numa+numb), ffunc(numa-numc), gfunc(ffunc(numd**2))),\
        gfunc(ffunc(numa-numb)), ffunc(ffunc(ffunc(ffunc(ffunc(numc))))), numd**8))

def ffunc(number):
    """Ffunc"""
    return number * 2

def gfunc(number):
    """gfunc"""
    return (3*number**4) - (number**3) + (2*number**2) + 10

def hfunc(number1, number2, number3):
    """hfunc"""
    return (number3 + number1)**2 - (number1*number2) + number2**2

def ifunc(number1, number2, number3, number4):
    """ifunc"""
    return (number1**2 + number2**2 - number3**2)/(number4**2 - 2*number1*number4 + 2*number1)

func(float(input()), float(input()), float(input()), float(input()))
