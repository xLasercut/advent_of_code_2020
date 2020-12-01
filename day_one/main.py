import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open(os.path.join(dir_path, 'input.txt'), 'r') as f:
    expenses = [int(item) for item in f.read().split('\n')]

    for i in range(len(expenses)):
        for j in range(i+1, len(expenses)):
            if expenses[i] + expenses[j] == 2020:
                print(expenses[i] * expenses[j])
