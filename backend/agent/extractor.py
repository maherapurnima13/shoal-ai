from bs4 import BeautifulSoup


def extract_pricing(html):

    soup = BeautifulSoup(html, "html.parser")

    pricing_data = []

    for text in soup.find_all(text=True):

        if "$" in text or "pricing" in text.lower():

            pricing_data.append(text.strip())

    return pricing_data