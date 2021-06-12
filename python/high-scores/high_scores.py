def latest(scores):
    return scores[-1]


def get_sorted(scores):
    return sorted(scores, reverse=True)

def personal_best(scores):
    return get_sorted(scores)[0]


def personal_top_three(scores):
    if len(scores) > 3:
        return get_sorted(scores)[0:3]
    return get_sorted(scores)
