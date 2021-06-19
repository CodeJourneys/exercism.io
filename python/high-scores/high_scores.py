def latest(scores):
    return scores[-1]


def get_sorted(scores):
    return sorted(scores, reverse=True)

def personal_best(scores):
    return get_sorted(scores)[0]


def personal_top_three(scores):
    return get_sorted(scores)[0:3]
