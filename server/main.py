# Data sources:
# https://www.feedingamerica.org/research/map-the-meal-gap/2016/overall/TX_AllCounties_CDs_MMG_2016.pdf
# https://www.feedingamerica.org/research/map-the-meal-gap/2016/child/TX_AllCounties_CDs_CFI_2016.pdf

# from flask import Flask
import csv


with open('FIbychild/county.csv') as csvfile:
    my_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in my_reader:
        if len(row) == 7:
            print(row[0].rjust(15), '|', row[2].ljust(5))
        else:
            print(row[0].rjust(15), '|', row[1].ljust(5))

# with open('overallfoodinsecurity/'
