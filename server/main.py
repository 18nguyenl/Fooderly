# Data sources:
# https://www.feedingamerica.org/research/map-the-meal-gap/2016/overall/TX_AllCounties_CDs_MMG_2016.pdf
# https://www.feedingamerica.org/research/map-the-meal-gap/2016/child/TX_AllCounties_CDs_CFI_2016.pdf

import csv

test = True

files = {
         'child-county': {'name': 'FIbychild/county.csv', 'x': 0, 'y': 1},
         'child-district': {'name': 'FIbychild/district.csv', 'x': 0, 'y': 2},
         'overall-county': {'name': 'FIoverall/county.csv', 'x': 0, 'y': 2},
         'overall-district': {'name': 'FIoverall/district.csv', 'x': 0, 'y': 2}
         }


def print_formatted_rows(rows, x, y):
    for row in rows:
        print(row[x].ljust(15), "|", row[y].rjust(5))
    return None


def print_all_data(files):
    for file in files.keys():
        print(files[file]['name'], '\n')
        with open(files[file]['name']) as csvfile:
            my_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
            print_formatted_rows(my_reader, files[file]['x'], files[file]['y'])
        print('-' * 25, '\n')

if __name__ == '__main__':
    if test: print_all_data(files)
