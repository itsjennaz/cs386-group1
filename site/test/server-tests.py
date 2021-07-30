# to run from the command line: $python server-tests.py 2> /dev/null

import requests

home_page = requests.get('https://www.colinwood.dev/alertx/', verify=False)
if home_page.status_code == 200:
    print("Passed")
else:
    print("Failed - home page down")

products_page = requests.get('https://www.colinwood.dev/alertx/products/', verify=False)
if products_page.status_code == 200:
    print("Passed")
else:
    print("Failed - products page down")

about_us_page = requests.get('https://www.colinwood.dev/alertx/about-us/', verify=False)
if about_us_page.status_code == 200:
    print("Passed")
else:
    print("Failed - about us page down")

sample_product_page = requests.get('https://www.colinwood.dev/alertx/sample-product/', verify=False)
if sample_product_page.status_code == 200:
    print("Passed")
else:
    print("Failed - sample product page down")

