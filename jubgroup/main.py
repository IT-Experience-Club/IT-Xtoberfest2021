import random
participants = ["Jeremy", "Ethel", "Melanie", "Argatha", "Veronica", "Valentino", "Beethoven"]
group = 1
membersInGroup = 3

for participant in participants[:]:
    if membersInGroup == 3:
        print("Group {} consists of;".format(group))
        membersInGroup = 0
        group += 1
    person = random.choice(participants)
    print(person)
    membersInGroup += 1
    participants.remove(str(person))

# need more option if membersInGroup > 3
# need someone to make it cools more <3
