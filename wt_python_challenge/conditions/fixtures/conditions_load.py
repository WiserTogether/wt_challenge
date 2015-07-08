import json
import os
from conditions.models import Condition


def apply_fixtures():
    data_file = os.path.realpath("data/aneurysm.json")


    with open(data_file) as file:
        data = json.load(file)
        condition = Condition.objects.create(name=data["data"]["name"])
        condition.save()
